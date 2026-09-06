const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

const USE_LINKEDIN_DATA = process.env.USE_LINKEDIN_DATA;
const APIFY_TOKEN = process.env.APIFY_TOKEN;
const LINKEDIN_PROFILE_URL =
  process.env.LINKEDIN_PROFILE_URL ||
  "https://www.linkedin.com/in/muhammad-ismail-72681b177";

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct."
};

function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({statusCode: res.statusCode, body: data});
      });
    });

    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function normalizeCertification(entry, index) {
  const title =
    entry.title ||
    entry.name ||
    entry.certificationName ||
    entry.credentialName;
  const issuer =
    entry.issuer ||
    entry.authority ||
    entry.company ||
    entry.organization ||
    entry.issuingOrganization;

  if (!title) return null;

  return {
    id:
      entry.id ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") ||
      `cert-${index}`,
    title,
    issuer: issuer || "LinkedIn",
    issuedDate: entry.issuedDate || entry.issueDate || entry.startDate || null,
    expiresDate: entry.expiresDate || entry.expirationDate || entry.endDate || null,
    credentialUrl:
      entry.credentialUrl ||
      entry.url ||
      entry.certificateUrl ||
      entry.externalUrl ||
      null,
    logoUrl: entry.logoUrl || entry.companyLogo || null
  };
}

function extractCertifications(payload) {
  const items = Array.isArray(payload) ? payload : [payload];
  const collected = [];

  for (const item of items) {
    const groups = [
      item.certifications,
      item.licensesAndCertifications,
      item.licenses,
      item.licenseAndCertificates,
      item?.profile?.certifications,
      item?.data?.certifications
    ];

    for (const group of groups) {
      if (!Array.isArray(group)) continue;
      group.forEach((entry, index) => {
        const normalized = normalizeCertification(entry, collected.length + index);
        if (normalized) collected.push(normalized);
      });
    }
  }

  const seen = new Set();
  return collected.filter(cert => {
    const key = `${cert.title}|${cert.issuer}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchLinkedInCertifications() {
  if (USE_LINKEDIN_DATA !== "true") return;
  if (!APIFY_TOKEN) {
    console.log(
      "USE_LINKEDIN_DATA is true but APIFY_TOKEN is missing — keeping existing linkedin-certifications.json"
    );
    return;
  }

  console.log(`Fetching LinkedIn certifications for ${LINKEDIN_PROFILE_URL}`);

  const body = JSON.stringify({
    profileUrls: [LINKEDIN_PROFILE_URL],
    includeCertifications: true
  });

  const options = {
    hostname: "api.apify.com",
    path: `/v2/acts/curious_coder~linkedin-profile-scraper/run-sync-get-dataset-items?token=${APIFY_TOKEN}`,
    port: 443,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    },
    timeout: 120000
  };

  try {
    const {statusCode, body: responseBody} = await httpsRequest(options, body);

    if (statusCode !== 200 && statusCode !== 201) {
      console.log(
        `LinkedIn fetch failed with status ${statusCode} — keeping existing linkedin-certifications.json`
      );
      return;
    }

    const payload = JSON.parse(responseBody);
    const certifications = extractCertifications(payload);

    if (!certifications.length) {
      console.log(
        "No certifications returned from Apify — keeping existing linkedin-certifications.json"
      );
      return;
    }

    const output = {
      profileUrl: LINKEDIN_PROFILE_URL,
      fetchedAt: new Date().toISOString().slice(0, 10),
      certifications
    };

    fs.writeFileSync(
      "./public/linkedin-certifications.json",
      JSON.stringify(output, null, 2)
    );
    console.log(
      `Saved ${certifications.length} certifications to public/linkedin-certifications.json`
    );
  } catch (error) {
    console.log(
      `LinkedIn certification fetch error: ${error.message} — keeping existing file`
    );
  }
}

async function fetchGithubProfile() {
  if (USE_GITHUB_DATA !== "true") return;
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    isHireable
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Length": Buffer.byteLength(data)
    }
  };

  const {statusCode, body: responseBody} = await httpsRequest(options, data);
  console.log(`GitHub statusCode: ${statusCode}`);

  if (statusCode !== 200) {
    throw new Error(ERR.requestFailed);
  }

  fs.writeFileSync("./public/profile.json", responseBody);
  console.log("saved file to public/profile.json");
}

async function main() {
  await Promise.allSettled([
    fetchGithubProfile(),
    fetchLinkedInCertifications()
  ]);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
