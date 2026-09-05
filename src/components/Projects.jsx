import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">

      {projects.map((p, index) => (
        <motion.div
          key={p.id}
          className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <div className="project-image">
            <img src={p.image} alt={p.title} />
          </div>

          <div className="project-content">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <strong>Tech Stack:</strong>
              <p style={{ display: "inline" }}> {p.techStack}</p>            
              <div className="project-links" style={{marginTop:15}}>
              <a href={p.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

        </motion.div>
      ))}

    </section>
  );
};

export default Projects;