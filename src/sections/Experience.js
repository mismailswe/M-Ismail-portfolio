import React from "react";
import {workExperiences} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import "./Experience.css";
export default function Experience() {
  if (!workExperiences.display) return null;
  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="shell background-grid">
        <SectionHeading
          id="experience-heading"
          index="05"
          title="Engineering experience"
          subtitle="The practical foundation of my research."
        />
        <div>
          {workExperiences.experience.map(job => (
            <article
              className="academic-record"
              key={`${job.company}-${job.date}`}
            >
              <p className="record__date">{job.date}</p>
              <h3>{job.role}</h3>
              <p className="record__institution">{job.company}</p>
              <p>{job.desc}</p>
              <details className="record__details">
                <summary>Responsibilities</summary>
                <ul>
                  {(job.descBullets || []).map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
