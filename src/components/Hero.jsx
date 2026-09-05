import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <motion.div
        className="hero"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          Clarity over complexity.
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <strong>Shifa Ahmed</strong> — a frontend developer focused on
          building responsive, user-friendly web experiences using modern
          technologies.
        </motion.p>

        <motion.p
          className="hero-sub"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
        >
          I turn ideas into clean, interactive, and visually appealing interfaces.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;