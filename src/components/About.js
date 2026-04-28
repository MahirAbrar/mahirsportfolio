import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  const titles = ["Software Engineer | Full-Stack Developer | Data Scientist"];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 mt-10 container mx-auto">
      <div className="flex flex-col text-center gap-6 lg:w-1/3">
        <img
          src={`${process.env.PUBLIC_URL}/IMG_2631.jpg`}
          className="w-full h-full object-cover rounded-full shadow-2xl max-w-[384px] max-h-[384px] mx-auto"
          alt="Hamid Abrar Mahir headshot"
          loading="eager"
          fetchpriority="high"
          width="384"
          height="384"
        />
        <h1 className="text-5xl font-extrabold">Hamid Abrar Mahir</h1>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/3 max-w-3xl text-center lg:text-left">
        <AnimatedTitle strings={titles} />
        <p className="text-lg">
          I'm a <span className="font-bold">Software Engineer</span> based in{" "}
          <span className="font-bold">Melbourne, Australia</span>, building
          full-stack web applications with{" "}
          <span className="font-bold">React</span>,{" "}
          <span className="font-bold">Next.js</span>,{" "}
          <span className="font-bold">TypeScript</span>, and{" "}
          <span className="font-bold">Python</span>.
        </p>
        <p className="text-lg">
          Graduate of{" "}
          <span className="italic">Monash University</span> with a{" "}
          <span className="font-bold">
            Bachelor of Computer Science in Data Science
          </span>. I currently contribute to{" "}
          <span className="font-bold">LLM training and evaluation pipelines</span>{" "}
          (RLHF, SFT) for frontier AI labs including Meta, OpenAI, and Anthropic
          via Outlier and Alignerr.
        </p>
        <p className="text-lg">
          I bring strong{" "}
          <span className="font-bold">problem-solving</span>,{" "}
          <span className="font-bold">leadership</span>, and{" "}
          <span className="font-bold">communication</span> skills to every
          project, and I'm a{" "}
          <span className="italic">dedicated self-learner</span> committed to
          lifelong learning.
        </p>
        <p className="text-lg">
          Constantly expanding my skillset and exploring new technologies to
          stay at the forefront of the industry — driven to deliver{" "}
          <span className="font-bold">impactful results</span> on innovative
          projects.
        </p>
      </div>
    </div>
  );
};

export default About;
