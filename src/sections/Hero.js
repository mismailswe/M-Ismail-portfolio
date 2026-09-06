import React from "react";
import {FiArrowDown, FiArrowUpRight, FiMapPin} from "react-icons/fi";
import {
  greeting,
  academicProfile,
  researchSection,
  contactInfo
} from "../portfolio";
import "./Hero.css";

export default function Hero() {
  if (!greeting.displayGreeting) return null;
  return (
    <section className="hero" id="home" aria-labelledby="profile-name">
      <div className="shell">
        <div className="hero__topline">
          <p className="eyebrow">{greeting.firstLine}</p>
          <span className="hero__location">
            <FiMapPin aria-hidden="true" /> {greeting.location}
          </span>
        </div>
        <div className="hero__grid">
          <div className="hero__bio">
            <h1 id="profile-name" aria-label={greeting.name}>
              {greeting.name.split(" ").slice(0, -1).join(" ")}
              <br />
              <span>{greeting.name.split(" ").slice(-1)[0]}.</span>
            </h1>
            <p className="hero__role">{greeting.roles[0]}</p>
            <p className="hero__text">{greeting.tagline}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#research">
                Explore publications <FiArrowDown aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={`mailto:${contactInfo.email_address}`}
              >
                Get in touch <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <nav className="hero__profiles" aria-label="Academic profiles">
              {researchSection.profileLinks.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <aside className="research-note" aria-label="Current research focus">
            <div className="research-note__heading">
              <span className="eyebrow">Research focus</span>
              <span className="research-note__number">01 — 03</span>
            </div>
            <h2>
              Memory, meaning,
              <br />
              and reliable AI.
            </h2>
            <p>
              Understanding intelligent systems
              <br />
              through careful experimentation.
            </p>
            <svg
              className="memory-figure"
              viewBox="0 0 360 154"
              role="img"
              aria-labelledby="memory-title"
            >
              <title id="memory-title">
                Conceptual connections between memory, retrieval, and evaluation
              </title>
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M52 78L142 34L238 78L142 124Z M142 34L142 124 M52 78H238 M238 78L314 40 M238 78L314 116" />
                <circle
                  cx="142"
                  cy="78"
                  r="64"
                  strokeDasharray="2 5"
                  opacity=".35"
                />
              </g>
              <g fill="var(--bg)" stroke="currentColor">
                <circle cx="52" cy="78" r="7" />
                <circle cx="142" cy="34" r="7" />
                <circle cx="142" cy="124" r="7" />
                <circle cx="238" cy="78" r="9" />
                <circle cx="314" cy="40" r="5" />
                <circle cx="314" cy="116" r="5" />
              </g>
              <circle cx="142" cy="78" r="5" fill="currentColor" />
            </svg>
            <div className="research-note__legend">
              <span>Memory</span>
              <span>Retrieval</span>
              <span>Evaluation</span>
            </div>
            <div className="research-note__footer">
              <span>Academic background</span>
              <strong>{academicProfile.degree}</strong>
              <p>{academicProfile.institution}</p>
            </div>
          </aside>
        </div>
        <div className="hero__bottom">
          <span>
            <i aria-hidden="true" />
            {greeting.availability}
          </span>
          <a href="#about">
            A little more about my work <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
