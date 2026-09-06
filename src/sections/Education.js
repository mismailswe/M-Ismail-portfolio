import React from "react";
import {educationInfo} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import "./Education.css";
export default function Education() {
  if (!educationInfo.display) return null;
  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="shell background-grid">
        <SectionHeading id="education-heading" index="04" title="Education" />
        <div>
          {educationInfo.schools.map(school => (
            <article className="academic-record" key={school.schoolName}>
              <p className="record__date">{school.duration}</p>
              <h3>{school.subHeader}</h3>
              <p className="record__institution">{school.schoolName}</p>
              <p>{school.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
