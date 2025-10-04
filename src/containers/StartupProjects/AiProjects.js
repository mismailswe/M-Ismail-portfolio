import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";
import "./StartupProjects.scss";
import {aiProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useMediaQuery} from "react-responsive";

export default function AiProjects() {
  const [currentProject, setCurrentProject] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [margin, setMargin] = useState(0);
  const [industeryProj, setIndusteryProj] = useState(aiProjects.projects);
  const sliderRef = useRef(null);

  // Dynamic margin calculation based on actual card width and gap
  const calculateCardWidth = () => {
    if (!sliderRef.current) return 369; // fallback to original value

    // Get the actual rendered card width by measuring the first card
    const firstCard = sliderRef.current.querySelector(".project-card");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 20; // From CSS: gap: 20px
      return cardWidth + gap;
    }

    // Fallback calculation if we can't measure the card
    const containerWidth = sliderRef.current.offsetWidth;
    const cardWidthPercentage = 23.5; // From CSS: calc(23.5% - 40px)
    const cardPadding = 40; // From CSS: calc(23.5% - 40px)
    const gap = 20; // From CSS: gap: 20px

    const cardWidth =
      (containerWidth * cardWidthPercentage) / 100 - cardPadding;
    return cardWidth + gap;
  };

  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const isSmallScreen = useMediaQuery({query: "(max-width: 600px)"});
  const isLaptopScreen = useMediaQuery({
    query: "(min-width: 601px) and (max-width: 1200px)"
  });

  useEffect(() => {
    setIsDesktop(!isSmallScreen && !isLaptopScreen);
  }, [isSmallScreen, isLaptopScreen]);

  const totalProjects = aiProjects.projects.length;
  const shouldShowSlider = isDesktop && totalProjects > 4;

  // Recalculate margin when component mounts or window resizes
  useEffect(() => {
    if (shouldShowSlider && sliderRef.current) {
      // Small delay to ensure cards are rendered
      const timer = setTimeout(() => {
        const cardWidth = calculateCardWidth();
        setMargin(currentProject * cardWidth);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [shouldShowSlider, currentProject]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (shouldShowSlider && sliderRef.current) {
        const cardWidth = calculateCardWidth();
        setMargin(currentProject * cardWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shouldShowSlider, currentProject]);

  const nextProject = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const cardWidth = calculateCardWidth();

    if (currentProject >= totalProjects - 4) {
      setCurrentProject(0);
      setMargin(0);
      setIndusteryProj(aiProjects.projects);
    } else {
      setMargin(prev => prev + cardWidth);
      setCurrentProject(prev => prev + 1);
      const project = aiProjects.projects.find(
        proj => proj.Id === currentProject
      );
      if (project) {
        setIndusteryProj(projects => [...projects, project]);
      }
    }

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, currentProject, totalProjects]);

  const prevProject = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const cardWidth = calculateCardWidth();
    setMargin(prev => prev - cardWidth);
    if (currentProject === 0) {
      setCurrentProject(totalProjects - 4);
      setMargin((totalProjects - 4) * cardWidth);
    } else {
      setCurrentProject(prev => prev - 1);
    }

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, currentProject, totalProjects]);

  // Auto-play functionality - move one project at a time
  useEffect(() => {
    if (!shouldShowSlider || isPaused) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextProject();
      }
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(interval);
  }, [
    shouldShowSlider,
    currentProject,
    isTransitioning,
    isPaused,
    nextProject
  ]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = e => {
      if (!shouldShowSlider) return;

      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [shouldShowSlider, nextProject, prevProject]);

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="main" id="projects" style={{marginTop: "22px"}}>
            <div>
              <h1 className="skills-heading">{aiProjects.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode project-subtitle"
                    : "subTitle project-subtitle"
                }
              >
                {aiProjects.subtitle}
              </p>

              <div className="projects-container">
                {aiProjects.projects.map((project, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      {project.image ? (
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className="card-image"
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark ? "dark-mode card-subtitle" : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>
                        {project.footerLink ? (
                          <div className="project-card-footer">
                            {project.footerLink.map((link, i) => {
                              return (
                                <span
                                  key={i}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag"
                                      : "project-tag"
                                  }
                                  onClick={() =>
                                    openProjectInNewWindow(link.url)
                                  }
                                >
                                  {link.name}
                                </span>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
              <div>
                <h1 className="skills-heading">{aiProjects.title}</h1>
                <p
                  className={
                    isDark
                      ? "dark-mode project-subtitle"
                      : "subTitle project-subtitle"
                  }
                >
                  {aiProjects.subtitle}
                </p>

                {shouldShowSlider ? (
                  <div className="projects-slider-container">
                    <div
                      className={`projects-slider  ${isPaused ? "paused" : ""}`}
                      ref={sliderRef}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div
                        className={`projects-slider-content 
                          ${isTransitioning ? "transitioning" : ""}
                          `}
                        style={{
                          transform: `translateX(-${margin}px)`,
                          transition: "transform 0.5s ease-in-out"
                        }}
                      >
                        {industeryProj.map((project, i) => (
                          <div
                            key={`${project.originalIndex}-${i}-${currentProject}`}
                            className={
                              isDark
                                ? "dark-mode project-card project-card-dark "
                                : "project-card project-card-light "
                            }
                          >
                            {project.image ? (
                              <div className="project-image">
                                <img
                                  src={project.image}
                                  alt={project.projectName}
                                  className="card-image"
                                />
                                <div className="project-image-overlay">
                                  <div className="overlay-content">
                                    <span className="view-project">
                                      View Project
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            <div className="project-detail">
                              <h5
                                className={
                                  isDark ? "dark-mode card-title" : "card-title"
                                }
                              >
                                {project.projectName}
                              </h5>
                              <p
                                className={
                                  isDark
                                    ? "dark-mode card-subtitle"
                                    : "card-subtitle"
                                }
                              >
                                {project.projectDesc}
                              </p>
                              {project.footerLink ? (
                                <div className="project-card-footer">
                                  {project.footerLink.map((link, i) => {
                                    return (
                                      <span
                                        key={i}
                                        className={
                                          isDark
                                            ? "dark-mode project-tag"
                                            : "project-tag"
                                        }
                                        onClick={() =>
                                          openProjectInNewWindow(link.url)
                                        }
                                      >
                                        {link.name}
                                      </span>
                                    );
                                  })}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`slider-arrow slider-arrow-left ${
                          isTransitioning ? "disabled" : ""
                        }`}
                        onClick={prevProject}
                        disabled={isTransitioning}
                        aria-label="Previous project"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <button
                        className={`slider-arrow slider-arrow-right ${
                          isTransitioning ? "disabled" : ""
                        }`}
                        onClick={nextProject}
                        disabled={isTransitioning}
                        aria-label="Next project"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="projects-container">
                    {aiProjects.projects.map((project, i) => {
                      return (
                        <div
                          key={i}
                          className={
                            isDark
                              ? "dark-mode project-card project-card-dark"
                              : "project-card project-card-light"
                          }
                        >
                          {project.image ? (
                            <div className="project-image">
                              <img
                                src={project.image}
                                alt={project.projectName}
                                className="card-image"
                              ></img>
                            </div>
                          ) : null}
                          <div className="project-detail">
                            <h5
                              className={
                                isDark ? "dark-mode card-title" : "card-title"
                              }
                            >
                              {project.projectName}
                            </h5>
                            <p
                              className={
                                isDark
                                  ? "dark-mode card-subtitle"
                                  : "card-subtitle"
                              }
                            >
                              {project.projectDesc}
                            </p>
                            {project.footerLink ? (
                              <div className="project-card-footer">
                                {project.footerLink.map((link, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={
                                        isDark
                                          ? "dark-mode project-tag"
                                          : "project-tag"
                                      }
                                      onClick={() =>
                                        openProjectInNewWindow(link.url)
                                      }
                                    >
                                      {link.name}
                                    </span>
                                  );
                                })}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
}
