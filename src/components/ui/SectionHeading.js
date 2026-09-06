import React from "react";
import "./ui.css";

/** Shared, readable section heading with optional editorial index. */
export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  return (
    <header className={`sec-head sec-head--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="sec-head__line">
        <h2 id={id} className="sec-head__title">
          {title}
        </h2>
        {index && (
          <span className="sec-head__index" aria-hidden="true">
            {index}
          </span>
        )}
      </div>
      {subtitle && <p className="sec-head__sub">{subtitle}</p>}
    </header>
  );
}
