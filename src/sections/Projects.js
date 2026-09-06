import React, {useState} from "react";
import {FiArrowUpRight, FiCode} from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import "./Projects.css";

export default function Projects({data, id = "work", index = "03"}) {
  const [expanded, setExpanded] = useState(false);
  if (!data || !data.display) return null;
  const shown = expanded ? data.projects : data.projects.slice(0, 4);
  return (
    <section
      className="section projects"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="shell">
        <span id="ai-lab" className="anchor-alias" aria-hidden="true" />
        <SectionHeading
          id={`${id}-heading`}
          index={index}
          title={data.title}
          subtitle={data.subtitle}
        />
        <div className="projects__grid">
          {shown.map(project => (
            <Reveal
              as="article"
              key={project.Id || project.projectName}
              className="project"
            >
              <div className="project__top">
                <FiCode aria-hidden="true" />
                <span>{project.category || "Software implementation"}</span>
              </div>
              <h3>{project.projectName}</h3>
              <p>{project.projectDesc}</p>
              {project.tags && (
                <ul className="project__tags">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <div className="project__links">
                {(project.footerLink || []).map(link => (
                  <a
                    className="text-link"
                    href={link.url}
                    key={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        {data.projects.length > 4 && (
          <button
            className="btn btn--ghost projects__more"
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded(value => !value)}
          >
            {expanded
              ? "Show fewer projects"
              : `Show all ${data.projects.length} projects`}
          </button>
        )}
      </div>
    </section>
  );
}
