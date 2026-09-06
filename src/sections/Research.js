import React, {useState} from "react";
import {FiArrowUpRight, FiCopy, FiCheck} from "react-icons/fi";
import {researchSection} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import "./Research.css";

function Publication({publication}) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.venue}. ${publication.links[0].url}`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <article className="pub" id={`publication-${publication.id}`}>
      <div className="pub__year">
        <span>{publication.year}</span>
        {publication.featured && (
          <span className="pub__selected">Latest paper</span>
        )}
      </div>
      <div className="pub__body">
        <div className="pub__meta">
          <span>Journal article</span>
          <span>{publication.roleBadge}</span>
        </div>
        <h3>
          <a
            href={publication.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {publication.title}
          </a>
        </h3>
        <p className="pub__authors">
          {publication.authors
            .split(/(Muhammad Ismail)/g)
            .map((part, i) =>
              part === "Muhammad Ismail" ? (
                <strong key={i}>{part}</strong>
              ) : (
                part
              )
            )}
        </p>
        <p className="pub__venue">{publication.venue}</p>
        <p className="pub__desc">{publication.description}</p>
        <ul className="pub__tags" aria-label="Topics">
          {publication.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="pub__actions">
          {publication.links.map(link => (
            <a
              className="text-link"
              href={link.url}
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label === "View Paper" ? "Paper" : "Code"}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <details className="citation">
            <summary
              onClick={() => {
                setCopied(false);
                setCopyError(false);
              }}
            >
              Cite
            </summary>
            <div className="citation__content">
              <p>{citation}</p>
              <button className="text-link" type="button" onClick={copy}>
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied" : "Copy citation"}
              </button>
              <span role="status">
                {copied
                  ? "Citation copied to clipboard."
                  : copyError
                  ? "Copy unavailable. Select and copy the citation above."
                  : ""}
              </span>
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}
export default function Research() {
  const [year, setYear] = useState("All");
  if (!researchSection.display) return null;
  const years = [
    ...new Set(researchSection.publications.map(pub => pub.year))
  ].sort((a, b) => b - a);
  const publications = researchSection.publications
    .filter(pub => year === "All" || pub.year === year)
    .sort((a, b) => b.year - a.year);
  return (
    <section
      className="section research"
      id="research"
      aria-labelledby="research-heading"
    >
      <div className="shell">
        <SectionHeading
          id="research-heading"
          index="02"
          title={researchSection.title}
          subtitle={researchSection.subtitle}
        />
        <div className="research__toolbar">
          <div
            className="research__filters"
            role="group"
            aria-label="Filter publications by year"
          >
            {["All", ...years].map(value => (
              <button
                key={value}
                type="button"
                aria-pressed={value === year}
                onClick={() => setYear(value)}
              >
                {value === "All" ? "All publications" : value}
                {value === "All" && (
                  <span>{researchSection.publications.length}</span>
                )}
              </button>
            ))}
          </div>
          <a
            className="text-link research__scholar"
            href={researchSection.profileLinks[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="sr-only" role="status">
          {publications.length} publications shown
        </p>
        <div className="research__list">
          {publications.map(pub => (
            <Publication key={pub.id} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}
