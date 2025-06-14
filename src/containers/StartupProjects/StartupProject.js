import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useMediaQuery} from "react-responsive";
export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const isSmallScreen = useMediaQuery({query: "(max-width: 600px)"});
  console.log("The isSmall screen is:", isSmallScreen);
  const {isDark} = useContext(StyleContext);
  // if (!bigProjects.display) {
  //   return null;
  // }
  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="main" id="projects" style={{marginTop: "22px"}}>
            <div>
              <h1 className="skills-heading">{bigProjects.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode project-subtitle"
                    : "subTitle project-subtitle"
                }
              >
                {bigProjects.subtitle}
              </p>

              <div className="projects-container">
                {bigProjects.projects.map((project, i) => {
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
          <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
              <div>
                <h1 className="skills-heading">{bigProjects.title}</h1>
                <p
                  className={
                    isDark
                      ? "dark-mode project-subtitle"
                      : "subTitle project-subtitle"
                  }
                >
                  {bigProjects.subtitle}
                </p>

                <div className="projects-container">
                  {bigProjects.projects.map((project, i) => {
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
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
}
