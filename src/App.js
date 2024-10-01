import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen flex flex-col bg-base-300">
        <About />
        <Divider
          title="Key Projects"
          note="Click on the cards to learn more about each project."
        />
        <Projects />
      </main>
    </div>
  );
};

export default App;
