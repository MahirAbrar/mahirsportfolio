import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import "./App.css"; // Import App.css instead of lightsvg.css
import Education from "./components/Education";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} handleToggle={handleToggle} />
      <main className="min-h-screen flex flex-col">
        <About />
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
      </main>
    </div>
  );
};

export default App;
