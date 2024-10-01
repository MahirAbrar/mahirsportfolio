import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="min-h-screen flex flex-col bg-base-200 dark:bg-gray-900">
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${
              darkMode ? "darksvg.svg" : "lightsvg.svg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <About />
          <Divider
            title="Key Projects"
            note="Click on the cards to learn more about each project."
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${
              darkMode ? "darksecondsvg.svg" : "lightsecondsvg.svg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Projects />
          <Divider title="Work Experience" />
        </div>
        <WorkExperience />
        <Divider title="Education" />
        <Divider title="Contact Me" />
      </main>
    </div>
  );
};

export default App;
