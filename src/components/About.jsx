import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        {[
          "I’m a frontend developer focused on building responsive and user-friendly web interfaces.",
          "I work with HTML, CSS, JavaScript, and React to create modern web applications.",
          "I use Bootstrap and Tailwind CSS to design clean and scalable UI systems.",
          "I care about performance, usability, and delivering smooth user experiences across all devices."
        ].map((text, i) => (
          <motion.p
            key={i}
            className={i === 3 ? "highlight" : ""}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

    </section>
  );
};

export default About;