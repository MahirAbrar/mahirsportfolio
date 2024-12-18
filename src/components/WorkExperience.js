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
    <div className="card-body p-4 sm:p-8">
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

      {references && references.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">References:</h4>
          {references.map((reference, index) => (
            <div key={index} className="mb-2 last:mb-0 ">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                <span className="font-medium">{reference.name}</span>
              </div>
              <div className="text-sm ml-6 mb-1">
                {reference.position}{" "}
                {reference.company && <span>at {reference.company}</span>}
              </div>
              {reference.email && (
                <div className="text-sm flex items-center mb-1">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <a
                    href={`mailto:${reference.email}`}
                    className="hover:underline"
                  >
                    {reference.email}
                  </a>
                </div>
              )}
              {reference.phone && (
                <div className="text-sm  flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <a
                    href={`tel:${reference.phone}`}
                    className="hover:underline"
                  >
                    {reference.phone}
                  </a>
                </div>
              )}
              <div className="justify-center items-center text-center">
                <div className="divider w-52 m-2" />
              </div>
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
      title: "AI Model Trainer - Independent Contractor",
      company: "Outlier AI",
      location: "Melbourne, Victoria",
      date: "Oct 2024 – Current",
      responsibilities: [
        "Conduct comprehensive prompt engineering and response reviews across multiple projects, utilizing TypeScript, R, JSON, YAML, HTML, Markdown, CSS, XML, JavaScript while maintaining high quality ratings",
        "Create advanced prompting strategies for image analysis models that outperformed SOTA benchmarks, demonstrating expertise in improving model performance",
        "Perform thorough testing and quality assurance of web applications built with JavaScript, React, Next.js, Bootstrap and Tailwind CSS, ensuring high accuracy and optimal functionality",
        "Conduct in-depth reviews of mathematical models using Python ecosystem including Sympy, NumPy, Matplotlib, scikit-learn and other machine learning/deep learning libraries for validation of complex calculations and data analysis",
        "Demonstrate expertise in testing AI-generated solutions and maintaining consistent high-quality output across diverse projects",
      ],
    },

    {
      title: "Data Analyst & UI Design Internship",
      company: "BDTax",
      location: "Dhaka, Bangladesh",
      date: "Dec 2023 – Jan 2024",
      responsibilities: [
        "Conducted in-depth data analysis in a 400,000-row table with Pandas, Matplotlib and R to derive marketing insights, driving informed decision making.",
        "Crafted dynamic Visualizations with Matplotlib and IPyWidgets, enhancing the marketing team's ability to make understand the information.",
        "Applied Gestalt principles in UI/UX design to enhance user engagement and streamline decision processes in Figma.",
      ],
      githubLink: "",
      references: [
        {
          name: "Mahbubul Kabir",
          position: "Chief Operating Officer",
          company: "BDTax",
          email: "kabir.mahbubul@bdtax.com.bd",
          phone: "+880 1929 988 001",
        },
        {
          name: "Zulfikar Ali",
          position: "Founder | Chief Product Officer",
          company: "BDTax",
          email: "zulfikar.ali@bdtax.com.bd",
          phone: "+1(651)331-1140",
        },
      ],
    },

    // You can add more work experiences here
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:px-8 p-2 w-full">
      {experience.map((job, index) => (
        <div key={index} className="w-full">
          <WorkExperienceItem {...job} />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
