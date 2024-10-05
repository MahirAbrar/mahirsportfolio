import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Lightsvg from "./components/assets/Lightsvg";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="min-h-screen flex flex-col bg-base-200 dark:bg-gray-900 z-0">
        <div className="container mx-auto px-4">
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
