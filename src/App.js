import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import "./App.css";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [scrollY, setScrollY] = useState(0);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar theme={theme} handleToggle={handleToggle} scrollY={scrollY} />
      <main id="top" className="flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <section id="about" aria-label="About Hamid Abrar Mahir">
            <About />
          </section>

          <section id="skills" aria-labelledby="skills-heading">
            <Divider title="Skills" headingId="skills-heading" />
            <Skills />
          </section>

          <section id="projects" aria-labelledby="projects-heading">
            <Divider
              title="Key Projects"
              note="Click below to learn more about each project."
              headingId="projects-heading"
            />
            <Projects />
          </section>

          <section id="experience" aria-labelledby="experience-heading">
            <Divider title="Work Experience" headingId="experience-heading" />
            <WorkExperience theme={theme} />
          </section>

          <section id="education" aria-labelledby="education-heading">
            <Divider title="Education" headingId="education-heading" />
            <Education />
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <Divider title="Contact Me" headingId="contact-heading" />
            <ContactMe />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
