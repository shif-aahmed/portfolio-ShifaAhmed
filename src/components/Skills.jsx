import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Responsive Design",
  "Git & GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;