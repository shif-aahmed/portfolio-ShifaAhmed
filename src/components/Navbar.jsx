import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import name from "../assets/name.png";

const Navbar = () => {
  const [active, setActive] = useState("home");

useEffect(() => {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      // KEY FIX: makes detection stable in center of screen
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={name} alt="logo" />
      </div>

      <div className="links">
        <a className={active === "home" ? "active" : ""} href="#home">Home</a>
        <a className={active === "about" ? "active" : ""} href="#about">About</a>
        <a className={active === "skills" ? "active" : ""} href="#skills">Skills</a>
        <a className={active === "projects" ? "active" : ""} href="#projects">Projects</a>
        <a className={active === "contact" ? "active" : ""} href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;