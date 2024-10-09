import React from "react";
import { Briefcase, Building2, User, Mail, Phone } from "lucide-react";

const WorkExperienceItem = ({
  title,
  company,
  location,
  date,
  responsibilities,
  githubLink,
  references,
}) => (
  <div className="card bg-base-100 shadow-xl md:mb-8 mb-2">
    <div className="card-body">
      <div className="flex items-center mb-2">
        <Briefcase className="w-5 h-5 mr-2 text-primary" />
        <h3 className="card-title text-xl">{title}</h3>
      </div>
      <div className="flex items-center text-sm opacity-70 mb-1">
        <Building2 className="w-4 h-4 mr-2 text-primary" />
        <span className="font-semibold">{company}</span>
        <span className="mx-2">|</span>
        <span>{location}</span>
      </div>
      <div className="text-sm opacity-60 mb-3 ml-6">{date}</div>
      <ul className="list-disc list-inside space-y-2 sm:ml-6 ml-2">
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
            <GitHub className="w-4 h-4 mr-2" />
            View on GitHub
          </a>
        </div>
      )} */}
      {references && references.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">References:</h4>
          {references.map((reference, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                <span className="font-medium">{reference.name}</span>
              </div>
              <div className="text-sm ml-6">
                {reference.position}{" "}
                {reference.company && <span>at {reference.company}</span>}
              </div>
              {reference.email && (
                <div className="text-sm ml-6 flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-primary" />
                  <a
                    href={`mailto:${reference.email}`}
                    className="hover:underline"
                  >
                    {reference.email}
                  </a>
                </div>
              )}
              {reference.phone && (
                <div className="text-sm ml-6 flex items-center">
                  <Phone className="w-3 h-3 mr-1 text-primary" />
                  <a
                    href={`tel:${reference.phone}`}
                    className="hover:underline"
                  >
                    {reference.phone}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
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
      githubLink: "",
      references: [
        {
          name: "Mahbubul Kabir",
          position: "Chief Operating Officer",
          company: "BDTax",
          email: "",
          phone: "",
        },
      ],
    },
    // You can add more work experiences here
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:px-8 p-2 ">
      {experience.map((job, index) => (
        <WorkExperienceItem key={index} {...job} />
      ))}
    </div>
  );
};

export default WorkExperience;
