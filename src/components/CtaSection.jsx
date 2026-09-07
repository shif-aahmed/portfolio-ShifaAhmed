import { motion } from "framer-motion";
import contact from "../data/contact";
import "../styles/CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left constellation background decoration */}
          <div className="cta-constellation cta-constellation--left" aria-hidden="true">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
              <line x1="20" y1="40" x2="80" y2="30" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
              <line x1="80" y1="30" x2="140" y2="80" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />
              <line x1="140" y1="80" x2="90" y2="130" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
              <line x1="90" y1="130" x2="30" y2="120" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <line x1="20" y1="40" x2="30" y2="120" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <line x1="80" y1="30" x2="90" y2="130" stroke="rgba(56,189,248,0.12)" strokeWidth="1" />
              <line x1="140" y1="80" x2="190" y2="120" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />

              <circle cx="20" cy="40" r="3" fill="#38bdf8" fillOpacity="0.7" />
              <circle cx="80" cy="30" r="3.5" fill="#38bdf8" fillOpacity="0.8" />
              <circle cx="140" cy="80" r="4" fill="#38bdf8" fillOpacity="0.9" />
              <circle cx="90" cy="130" r="3" fill="#38bdf8" fillOpacity="0.6" />
              <circle cx="30" cy="120" r="3.5" fill="#38bdf8" fillOpacity="0.7" />
              <circle cx="190" cy="120" r="2.5" fill="#38bdf8" fillOpacity="0.5" />
            </svg>
          </div>

          {/* Right constellation background decoration */}
          <div className="cta-constellation cta-constellation--right" aria-hidden="true">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
              <line x1="30" y1="90" x2="80" y2="50" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />
              <line x1="80" y1="50" x2="150" y2="60" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
              <line x1="150" y1="60" x2="190" y2="130" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <line x1="80" y1="50" x2="120" y2="140" stroke="rgba(56,189,248,0.18)" strokeWidth="1" />
              <line x1="120" y1="140" x2="190" y2="130" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <line x1="30" y1="90" x2="120" y2="140" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />

              <circle cx="30" cy="90" r="3" fill="#38bdf8" fillOpacity="0.7" />
              <circle cx="80" cy="50" r="3.5" fill="#38bdf8" fillOpacity="0.8" />
              <circle cx="150" cy="60" r="4" fill="#38bdf8" fillOpacity="0.9" />
              <circle cx="120" cy="140" r="3" fill="#38bdf8" fillOpacity="0.7" />
              <circle cx="190" cy="130" r="3" fill="#38bdf8" fillOpacity="0.6" />
            </svg>
          </div>

          <div className="cta-content">
            <span className="cta-sub">Have a project in mind?</span>
            <h2 className="cta-title">Let’s build something useful.</h2>
            <p className="cta-desc">
              I’m open to opportunities, collaborations and freelance projects.
            </p>

            <div className="cta-actions">
              <a href={`mailto:${contact.email}`} className="cta-btn cta-btn--primary">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Let’s Talk
              </a>

              <a
                href={contact.resume}
                download="Shifa_Ahmed_Resume.pdf"
                className="cta-btn cta-btn--secondary"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
