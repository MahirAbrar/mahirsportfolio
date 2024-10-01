import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  const titles = ["Full Stack Developer | Data Scientist"];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8  mt-10">
      <div className="flex flex-col text-center gap-6 lg:w-1/3">
        <img
          src={`${process.env.PUBLIC_URL}/IMG_2631.jpg`}
          className="w-full h-full object-cover rounded-full shadow-2xl max-w-[384px] max-h-[384px] mx-auto"
          alt="Profile"
        />
        <h3 className="text-5xl font-extrabold text-gray-800">
          Hamid Abrar Mahir
        </h3>
      </div>
      <div className="flex flex-col lg:w-2/3 max-w-3xl">
        <AnimatedTitle strings={titles} />
        <p className="text-lg ">
          I am a graduate from{" "}
          <span className="font-bold">
            Bachelors of Computer Science in Data Science
          </span>{" "}
          from <span className="italic">Monash University</span>. I bring strong{" "}
          <span className="font-bold">problem-solving</span>,{" "}
          <span className="font-bold">leadership</span>, and{" "}
          <span className="font-bold">communication</span> skills to every
          project.
        </p>
        <p className="text-lg text-gray-800">
          Ready to leverage my{" "}
          <span className="font-bold">fast-learning ability</span> and{" "}
          <span className="italic ">passion for emerging technologies</span> to
          drive <span className="font-bold">impactful results</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
