import { motion } from "framer-motion";
import technologies from "../data/technologies";
import "../styles/About.css";

/* ——— tiny colored-dot icons for each tech ——— */
const dotColors = {
  react: "#61dafb", nextjs: "#ffffff", angular: "#dd0031",
  javascript: "#f7df1e", typescript: "#3178c6", html5: "#e34f26",
  css3: "#1572b6", tailwind: "#06b6d4", nodejs: "#339933",
  express: "#ffffff", api: "#38bdf8", postgresql: "#ffca28",
  auth: "#38bdf8", mongodb: "#47a248", mysql: "#4479a1",
  sqlserver: "#cc2927", git: "#f05032", github: "#ffffff",
  postman: "#ff6c37", vercel: "#646cff", vscode: "#007acc",
  nestjs: "#f24e1e",
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-row">
          {/* ===== LEFT — About Me Card ===== */}
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="about-card__header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" /><polygon points="18 2 22 6 12 16 8 16 8 12 18 2" /></svg>
              <h2>About Me</h2>
            </div>

            <div className="about-card__body">
              <p>
                I'm a Computer Science student and Software Developer focused on
                building modern, responsive web applications.
              </p>

              <p>
                I enjoy turning ideas into practical digital solutions using the
                MERN stack, with a focus on clean interfaces and reliable functionality.
              </p>

              <p>
                My experience spans frontend and backend development, including
                React.js, Node.js, Express.js, REST APIs, databases, and NestJs.
              </p>

              <p className="about-card__highlight">
                I focus on writing clean, maintainable code and creating
                smooth, user-friendly experiences across devices.
              </p>
            </div>

            {/* <div className="about-card__stats">
              <div className="stat">
                <span className="stat__number">2+</span>
                <span className="stat__label">Years of Learning</span>
              </div>
              <div className="stat">
                <span className="stat__number">8+</span>
                <span className="stat__label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat__number">1+</span>
                <span className="stat__label">Internship</span>
              </div>
              <div className="stat stat--icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                <span className="stat__label">Problem<br />Solver</span>
              </div>
            </div> */}
          </motion.div>

          {/* ===== RIGHT — Technologies Card ===== */}
          <motion.div
            className="tech-card"
            id="technologies"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tech-card__header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
              <h2>Technologies</h2>
            </div>

            <div className="tech-card__grid">
              {Object.entries(technologies).map(([category, techs]) => (
                <div className="tech-column" key={category}>
                  <h3 className="tech-column__title">{category}</h3>
                  <ul className="tech-column__list">
                    {techs.map((tech) => (
                      <li key={tech.name} className="tech-item">
                        <span
                          className="tech-item__dot"
                          style={{ background: dotColors[tech.icon] || "#38bdf8" }}
                        />
                        <span className="tech-item__name">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;