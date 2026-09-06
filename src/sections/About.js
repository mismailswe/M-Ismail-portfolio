import React from "react";
import {FiArrowUpRight} from "react-icons/fi";
import {aboutSection, academicProfile} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import "./About.css";

export default function About() {
  if (!aboutSection.display) return null;
  return (
    <section
      className="section about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="shell">
        <div className="about__grid">
          <div>
            <SectionHeading
              id="about-heading"
              index="01"
              title="About my research"
            />
            <div className="about__bio">
              {aboutSection.paragraphs.map(p => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="updates" id="linkedin">
            <h3>Recent updates</h3>
            <ul>
              {academicProfile.updates.map(update => (
                <li key={update.text}>
                  <time dateTime={update.date}>{update.label}</time>
                  <a
                    href={update.href}
                    target={update.href.startsWith("#") ? undefined : "_blank"}
                    rel={
                      update.href.startsWith("#")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    {update.text}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="interests__heading" id="skills">
          <h3>Research interests</h3>
          <span>Three connected directions</span>
        </div>
        <div className="interests">
          {academicProfile.interests.map((interest, index) => (
            <Reveal as="article" className="interest" key={interest.title}>
              <span className="interest__index">0{index + 1}</span>
              <h4>{interest.title}</h4>
              <p>{interest.description}</p>
              <span className="interest__keywords">{interest.keywords}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
