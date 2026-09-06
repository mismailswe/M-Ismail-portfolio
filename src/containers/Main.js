import React from "react";
import {ThemeProvider} from "../contexts/ThemeContext";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Research from "../sections/Research";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import {researchProjects} from "../portfolio";

export default function Main() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="app-shell">
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <About />
          <Research />
          <Projects data={researchProjects} id="work" index="03" />
          <Education />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
