import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import "../styles/Projects.css";

const DESCRIPTION_LIMIT = 120;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const renderProjectCard = (project, index, isExtra = false) => {
    const isTruncated = project.description.length > DESCRIPTION_LIMIT;

    return (
      <motion.article
        key={project.id}
        className="project-card"
        initial={isExtra ? { opacity: 0, y: 25, scale: 0.97 } : { opacity: 0, y: 30 }}
        animate={isExtra ? { opacity: 1, y: 0, scale: 1 } : undefined}
        exit={isExtra ? { opacity: 0, y: 20, scale: 0.97 } : undefined}
        whileInView={!isExtra ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        viewport={!isExtra ? { once: true, amount: 0.1 } : undefined}
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__image-link"
        >
          <div className="project-card__image-wrapper">
            <img
              src={project.image}
              alt={`${project.title} — project screenshot`}
              className="project-card__image"
              loading="lazy"
            />
          </div>
        </a>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">
            {isTruncated ? (
              <>
                {project.description.slice(0, DESCRIPTION_LIMIT)}...{" "}
                <button
                  type="button"
                  className="project-card__more-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  More
                </button>
              </>
            ) : (
              project.description
            )}
          </p>

          <div className="project-card__tags">
            {project.techStack.split(",").map((tech) => (
              <span key={tech.trim()} className="project-card__tag">
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="project-card__actions">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--secondary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--secondary"
              >
                Case Study
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">What I've built</span>
          <div className="projects__title-row">
            <h2 className="section-title">Projects</h2>
            {projects.length > 3 && (
              <button
                type="button"
                className="projects__view-all-btn"
                onClick={() => setShowAll((prev) => !prev)}
              >
                <span>{showAll ? "Show Less" : "View All"}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            )}
          </div>
          <p className="section-subtitle">
            A selection of projects I've worked on — from responsive frontends to full-stack applications.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.slice(0, 3).map((project, index) => renderProjectCard(project, index, false))}
          <AnimatePresence>
            {showAll &&
              projects.slice(3).map((project, index) => renderProjectCard(project, index, true))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-modal__header">
                <div>
                  <span className="project-modal__label">Description</span>
                  <h3 className="project-modal__title">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  className="project-modal__close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="project-modal__body">
                <p className="project-modal__description">{selectedProject.description}</p>

                <div className="project-modal__tech-stack">
                  <span className="project-modal__subtitle">Tech Stack</span>
                  <div className="project-card__tags">
                    {selectedProject.techStack.split(",").map((tech) => (
                      <span key={tech.trim()} className="project-card__tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card__actions">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--primary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn project-card__btn--secondary"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {selectedProject.caseStudy && (
                    <a
                      href={selectedProject.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn project-card__btn--secondary"
                    >
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;