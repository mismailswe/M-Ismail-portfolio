import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {FiArrowUpRight, FiAward, FiExternalLink, FiLinkedin} from "react-icons/fi";
import {achievementSection, socialMediaLinks} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import {EASE, stagger, viewport} from "../lib/motion";
import "./Achievements.css";

function formatIssueDate(dateStr) {
  if (!dateStr) return null;
  const parsed = new Date(`${dateStr}-01`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-US", {month: "short", year: "numeric"});
}

function IssuerLogo({cert}) {
  const [failed, setFailed] = useState(false);

  if (cert.logoUrl && !failed) {
    return (
      <img
        src={cert.logoUrl}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  return <span aria-hidden="true">{cert.issuer?.charAt(0) || "?"}</span>;
}

function CertificationCard({cert}) {
  const issued = formatIssueDate(cert.issuedDate);
  const expires = formatIssueDate(cert.expiresDate);

  return (
    <motion.article
      className="ach-card glass lift"
      variants={{
        hidden: {opacity: 0, y: 28},
        show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: EASE}}
      }}
    >
      <div className="ach-card__head">
        <span className="ach-card__logo">
          <IssuerLogo cert={cert} />
        </span>
        <FiAward className="ach-card__badge" aria-hidden="true" />
      </div>

      <h3 className="ach-card__title">{cert.title}</h3>
      <p className="ach-card__issuer">{cert.issuer}</p>

      {issued || expires ? (
        <p className="ach-card__dates">
          {issued ? <span>Issued {issued}</span> : null}
          {issued && expires ? <span aria-hidden="true"> · </span> : null}
          {expires ? <span>Expires {expires}</span> : null}
        </p>
      ) : null}

      {cert.credentialUrl ? (
        <div className="ach-card__links">
          <a
            className="ach-card__link"
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View certificate
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </motion.article>
  );
}

export default function Achievements() {
  const [certifications, setCertifications] = useState(
    achievementSection.certifications || []
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.PUBLIC_URL || ""}/linkedin-certifications.json`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (cancelled || !data?.certifications?.length) return;
        setCertifications(data.certifications);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!achievementSection.display) return null;

  const profileUrl =
    achievementSection.profileUrl || socialMediaLinks.linkedin;

  return (
    <section className="section achievements" id="awards">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Recognition"
          title={
            <>
              Certifications & <span className="grad-text">credentials</span>
            </>
          }
          subtitle={achievementSection.subtitle}
        />

        <motion.div
          className="ach__grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {certifications.map(cert => (
            <CertificationCard key={cert.id || cert.title} cert={cert} />
          ))}
        </motion.div>

        {!loaded && certifications.length === 0 ? (
          <p className="ach__loading lead" aria-live="polite">
            Loading certifications…
          </p>
        ) : null}

        <motion.div
          className="ach__cta-wrap"
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.6}}
          transition={{duration: 0.55, ease: EASE}}
        >
          <a
            className="ach__profile btn btn--ghost"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" />
            View all on LinkedIn
            <FiExternalLink aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
