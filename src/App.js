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
      <main className="flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <About />
          <Divider title="Skills" />
          <Skills />
          <Divider
            title="Key Projects"
            note="Click below to learn more about each project."
          />
          <Projects />
          <Divider title="Work Experience" />
          <WorkExperience theme={theme} />
          <Divider title="Education" />
          <Education />
          <Divider title="Contact Me" />
          <ContactMe />
        </div>
      </main>
    </div>
  );
};

export default App;
