import React from "react";
import {FiArrowUpRight, FiArrowUp} from "react-icons/fi";
import {greeting, researchSection} from "../portfolio";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div>
          <a className="footer__name" href="#home">
            {greeting.name}
          </a>
          <p>Research, with an engineering perspective.</p>
        </div>
        <nav aria-label="Footer academic profiles">
          {researchSection.profileLinks.slice(0, 2).map(link => (
            <a
              className="text-link"
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a className="text-link" href="#home">
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div className="shell footer__bottom">
        <p>
          © {new Date().getFullYear()} {greeting.name}
        </p>
        <span>{greeting.location}</span>
      </div>
    </footer>
  );
}
