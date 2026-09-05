import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let’s Work Together</h2>
          <p>
            I’m open to opportunities, collaborations, and freelance projects.
            If you like my work, feel free to reach out.
          </p>

          <span className="quote">
“Let’s turn ideas into something meaningful.”          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

<div className="contact-item">
  <h4>Email</h4>
  <p>
    <a href="mailto:shifaahmed3108@gmail.com">
      shifaahmed3108@gmail.com
    </a>
  </p>
</div>

<div className="contact-item">
  <h4>Phone</h4>
  <p>
    <a href="tel:+923330359970">
      +92 333 0359970
    </a>
  </p>
</div>

<div className="contact-item">
  <h4>GitHub</h4>
  <p>
    <a
      href="https://github.com/shif-aahmed"
      target="_blank"
      rel="noreferrer"
    >
      github.com/shif-aahmed
    </a>
  </p>
</div>

<div className="contact-item">
  <h4>LinkedIn</h4>
  <p>
    <a
      href="https://linkedin.com/in/shifa-ahmed-493a413a0"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/shifa-ahmed-493a413a0
    </a>
  </p>
</div>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;