import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import contact from "../data/contact";
import "../styles/Hero.css";

const techBadges = ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__label" variants={itemVariants}>
            Software Developer
          </motion.span>

          <motion.h1 className="hero__title" variants={itemVariants}>
            Hi, I'm<br />
            <span className="hero__name">Shifa Ahmed</span>
          </motion.h1>

          <motion.p className="hero__description" variants={itemVariants}>
            I build modern, responsive and scalable web applications
            with clean code and great user experience.
          </motion.p>

          <motion.p className="hero__sub" variants={itemVariants}>
            Focused on frontend and full-stack web development using the MERN stack and modern technologies.
          </motion.p>

          <motion.div className="hero__badges" variants={itemVariants}>
            {techBadges.map((tech) => (
              <span key={tech} className="hero__badge">{tech}</span>
            ))}
          </motion.div>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <CodeEditor />
          <div className="hero__visual-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;