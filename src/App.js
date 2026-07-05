import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TitleBar from "./components/TitleBar";
import Gutters from "./components/Gutters";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import StatusBar from "./components/StatusBar";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-desk desk-grid px-2 py-2.5 dt:px-6 dt:py-10 text-body font-sans">
      <Gutters />
      <div className="max-w-[1240px] mx-auto bg-page border border-line rounded-[14px] shadow-[0_48px_100px_-48px_rgba(0,0,0,0.55)]">
        <TitleBar />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main id="top" className="max-w-[1060px] mx-auto px-[18px] dt:px-10">
          <Hero />
          <Products />
          <WorkExperience />
          <Projects />
          <Skills />
          <Education />
          <ContactMe />
        </main>
        <StatusBar />
      </div>
    </div>
  );
};

export default App;
