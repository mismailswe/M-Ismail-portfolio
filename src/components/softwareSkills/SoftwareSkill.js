import React, {useState, useEffect} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const [activeCategory, setActiveCategory] = useState("software");
  const [isLoading, setIsLoading] = useState(false);
  const skillsByCategory = skillsSection.skillsByCategory || {};

  // Separate software skills from data science skills
  const softwareSkills = {
    Frontend: skillsByCategory.Frontend || [],
    Backend: skillsByCategory.Backend || [],
    Databases: skillsByCategory.Databases || [],
    "Cloud & Deployment": skillsByCategory["Cloud & Deployment"] || [],
    "Tools & Others": skillsByCategory["Tools & Others"] || []
  };

  const dataScienceSkills = {
    "Data Science & ML": skillsByCategory["Data Science & ML"] || []
  };

  const currentSkills =
    activeCategory === "software" ? softwareSkills : dataScienceSkills;

  const handleCategoryChange = category => {
    setIsLoading(true);
    setActiveCategory(category);

    // Simulate a brief loading state for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="skills-toggle-container">
        <button
          className={`toggle-btn ${
            activeCategory === "software" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("software")}
          disabled={isLoading}
        >
          <span className="toggle-icon">💻</span>
          Software Skills
        </button>
        <button
          className={`toggle-btn ${
            activeCategory === "dataScience" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("dataScience")}
          disabled={isLoading}
        >
          <span className="toggle-icon">🤖</span>
          Data Science & ML
        </button>
      </div>

      {/* Skills Display */}
      <div className={`software-skills-main-div ${isLoading ? "loading" : ""}`}>
        {Object.entries(currentSkills).map(([category, items]) => (
          <div key={category} className="skill-category-card">
            <div className="category-header">
              <span className="category-label">{category}</span>
            </div>
            <div className="skills-grid">
              {items.map((skills, i) => {
                return (
                  <div key={i} className="skill-item" name={skills.skillName}>
                    <div className="skill-icon">
                      <img
                        width={"40px"}
                        height={"40px"}
                        src={skills.src}
                        alt={skills.skillName}
                      />
                    </div>
                    <p className="skill-name">{skills.skillName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
