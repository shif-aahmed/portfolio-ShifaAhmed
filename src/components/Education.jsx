import { motion } from "framer-motion";
import education from "../data/education";
import "../styles/Education.css";

const Education = () => {
  return (
    <div id="education" className="education-block">
      <motion.div
        className="section-title-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <svg
          className="section-title-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
        <h2 className="section-title-text">Education</h2>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={item.id} className="education-item">
              <div className="education-item__marker">
                <div className="education-item__dot" />
                {index < education.length - 1 && (
                  <div className="education-item__line" />
                )}
              </div>

              <div className="education-item__content">
                <span className="education-item__period">{item.period}</span>
                <h3 className="education-item__degree">{item.degree}</h3>
                <p className="education-item__institution">{item.institution}</p>
                {item.description && (
                  <p className="education-item__desc">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
