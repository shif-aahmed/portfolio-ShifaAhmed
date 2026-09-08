import { motion } from "framer-motion";
import experience from "../data/experience";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <h2 className="section-title-text">Experience</h2>
        </motion.div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="experience-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-card__left">
                <div className="experience-card__logo">
                  {item.logoLetter || item.company.charAt(0)}
                </div>
                <div className="experience-card__meta">
                  <h3 className="experience-card__role">{item.role}</h3>
                  <p className="experience-card__company">
                    {item.company} &nbsp;•&nbsp; {item.period} &nbsp;•&nbsp; {item.workType}
                  </p>
                </div>
              </div>

              <div className="experience-card__right">
                <ul className="experience-card__bullets">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i}>
                      <span className="bullet-dot">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
