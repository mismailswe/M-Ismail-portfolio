import React, {useEffect, useRef, useState} from "react";
import {FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX} from "react-icons/fi";
import {greeting} from "../portfolio";
import {useTheme} from "../contexts/ThemeContext";
import useScrollSpy from "../hooks/useScrollSpy";
import "./Navbar.css";

const LINKS = [
  {id: "about", label: "About"},
  {id: "research", label: "Publications"},
  {id: "work", label: "Research software"},
  {id: "education", label: "Background"},
  {id: "contact", label: "Contact"}
];
const SPY_IDS = [
  "home",
  "about",
  "research",
  "work",
  "education",
  "experience",
  "contact"
];
export default function Navbar() {
  const {isDark, toggleTheme} = useTheme();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const active = useScrollSpy(SPY_IDS);
  useEffect(() => {
    if (!open) return undefined;
    const close = event => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current.focus();
      }
    };
    const outside = event => {
      if (!navRef.current.contains(event.target)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth > 1000) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="nav" ref={navRef}>
      <nav className="nav__inner shell" aria-label="Primary">
        <a
          className="nav__brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label={`${greeting.name}, home`}
        >
          <span className="nav__mark">
            mi<span>.</span>
          </span>
          <span className="nav__brand-text">Muhammad Ismail</span>
        </a>
        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a
            className="nav__cv"
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            className="nav__icon-btn nav__burger"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-controls="primary-links"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul
          id="primary-links"
          className={`nav__links ${open ? "nav__links--open" : ""}`}
        >
          {LINKS.map(link => {
            const current =
              active === link.id ||
              (link.id === "education" && active === "experience");
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={current ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
