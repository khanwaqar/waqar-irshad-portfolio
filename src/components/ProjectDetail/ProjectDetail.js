import React, { useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { projectsData } from "../../data/projectsData";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { projectSlug } = useParams();
  const history = useHistory();

  const project = projectsData.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="projectDetail">
        <h2 style={{ textAlign: "center", marginTop: "4rem" }}>
          Project not found 😔
        </h2>
      </div>
    );
  }

  return (
    <div className="projectDetail">
      {/* ---------- HERO IMAGE ---------- */}
      <div
        className="projectHero smallHero"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        <div className="heroOverlay"></div>
        <button
          className="backButton"
          onClick={() => history.push("/projects")}
          style={{
            background: theme.secondary,
            color: theme.primary,
          }}
        >
          <FaArrowLeft /> Back to Projects
        </button>
      </div>

      {/* ---------- TITLE + CATEGORY + BUTTONS ---------- */}
      <div className="projectHeader">
        <h1 className="projectTitle" style={{ color: theme.primary }}>
          {project.projectName}
        </h1>

        {project.category && (
          <p className="projectCategory" style={{ color: theme.tertiary }}>
            {project.category}
          </p>
        )}

        <div className="heroActions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="heroButton demoButton"
              style={{
                background: theme.primary,
                color: theme.secondary,
              }}
            >
              <AiOutlineEye /> Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="heroButton codeButton"
              style={{
                borderColor: theme.primary,
                color: theme.primary,
              }}
            >
              <AiOutlineGithub /> View Code
            </a>
          )}
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="projectMainContent">
        <div className="contentWrapper">
          {/* Overview */}
          {project.overview && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Overview</h2>
              <p className="projectDescription">{project.overview}</p>
            </section>
          )}

          {/* Problem Statement */}
          {project.problem && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Problem</h2>
              <p className="projectDescription">{project.problem}</p>
            </section>
          )}

          {/* Solution */}
          {project.solution && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Solution</h2>
              <p className="projectDescription">{project.solution}</p>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Key Features</h2>
              <ul className="featuresList">
                {project.features.map((feature, i) => (
                  <li key={i} className="featureItem">
                    <span
                      className="featureCheck"
                      style={{ color: theme.primary }}
                    >
                      <FaCheckCircle />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Impact */}
          {project.impact && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Impact</h2>
              <p className="projectDescription">{project.impact}</p>
            </section>
          )}

          {/* Technologies */}
          {project.tags && project.tags.length > 0 && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Technologies Used</h2>
              <div className="techGrid">
                {project.tags.map((tech, i) => (
                  <span
                    key={i}
                    className="techTag"
                    style={{
                      borderColor: theme.primary,
                      color: theme.primary,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Meta Info */}
          {(project.date || project.type) && (
            <section className="section">
              <h2 style={{ color: theme.primary }}>Project Info</h2>
              <div className="projectMeta">
                {project.date && (
                  <div className="metaItem" style={{ color: theme.tertiary }}>
                    📅 <span>{project.date}</span>
                  </div>
                )}
                {project.type && (
                  <div className="metaItem" style={{ color: theme.tertiary }}>
                    🧩 <span>{project.type}</span>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* ---------- RELATED PROJECTS ---------- */}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <div className="relatedProjects">
          <h2 style={{ color: theme.primary }}>Related Projects</h2>
          <div className="relatedGrid">
            {project.relatedProjects.map((rel, i) => (
              <Link
                key={i}
                to={`/project/${rel.slug}`}
                className="relatedProjectCard"
              >
                <div
                  className="relatedProjectImage"
                  style={{ backgroundImage: `url(${rel.image})` }}
                ></div>
                <div className="relatedProjectContent">
                  <h3
                    className="relatedProjectTitle"
                    style={{ color: theme.tertiary }}
                  >
                    {rel.projectName}
                  </h3>
                  {rel.category && (
                    <span
                      className="relatedTag"
                      style={{
                        background: theme.primary,
                        color: theme.secondary,
                      }}
                    >
                      {rel.category}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
