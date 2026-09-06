import React from "react";
import {skillsSection} from "../portfolio";
import "./Marquee.css";

/**
 * Infinite logo ribbon. The track holds two identical copies so the CSS
 * translate of -50% loops seamlessly.
 */
export default function Marquee() {
  const logos = skillsSection.softwareSkills || [];
  if (!logos.length) return null;

  const track = [...logos, ...logos];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((logo, index) => (
          <span className="marquee__item" key={`${logo.skillName}-${index}`}>
            <img src={logo.src} alt="" loading="lazy" />
            {logo.skillName}
          </span>
        ))}
      </div>
    </div>
  );
}
