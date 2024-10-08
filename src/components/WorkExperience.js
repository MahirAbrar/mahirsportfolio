import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BriefcaseIcon } from "lucide-react";
import { BuildingIcon } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WorkExperienceItem = ({
  title,
  company,
  location,
  date,
  responsibilities,
  githubLink,
}) => (
  <div className="card bg-base-100 shadow-xl mb-8">
    <div className="card-body">
      <div className="flex items-center mb-2">
        <BriefcaseIcon className="w-5 h-5 mr-2 text-primary" />
        <h3 className="card-title text-xl">{title}</h3>
      </div>
      <div className="flex items-center text-sm opacity-70 mb-1">
        <BuildingIcon className="w-4 h-4 mr-2 text-primary" />
        <span className="font-semibold">{company}</span>
        <span className="mx-2">|</span>
        <span>{location}</span>
      </div>
      <div className="text-sm opacity-60 mb-3 ml-6">{date}</div>
      <ul className="list-disc list-inside space-y-2 ml-6">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-sm">
            {responsibility}
          </li>
        ))}
      </ul>
      {/* {githubLink && (
        <div className="mt-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View on GitHub
          </a>
        </div>
      )} */}
    </div>
  </div>
);

const WorkExperience = () => {
  const experience = [
    {
      title: "Data Analyst & UI Design Internship",
      company: "BDTax",
      location: "Dhaka, Bangladesh",
      date: "Dec 2023 – Jan 2024",
      responsibilities: [
        "Conducted in-depth data analysis with Pandas, Matplotlib and R to derive marketing insights, driving informed decision making and contributing to company growth.",
        "Crafted dynamic Visualizations with Matplotlib and IPyWidgets, enhancing the marketing team's ability to make understand the information.",
        "Applied Gestalt principles in UI/UX design to enhance user engagement and streamline decision processes.",
      ],
      githubLink: "https://github.com/yourusername/bdtax-project", // Replace with actual link if available
    },
    // You can add more work experiences here
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8  ">
      {experience.map((job, index) => (
        <WorkExperienceItem key={index} {...job} />
      ))}
    </div>
  );
};

export default WorkExperience;
