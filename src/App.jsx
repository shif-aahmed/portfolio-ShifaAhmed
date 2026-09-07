import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <section className="edu-contact-section">
          <div className="container">
            <div className="edu-contact-grid">
              <Education />
              <Contact />
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}