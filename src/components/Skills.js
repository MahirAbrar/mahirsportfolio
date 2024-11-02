import React from "react";
import { Code, Server, BarChart, Wrench, Cloud } from "lucide-react";

const SkillCategory = ({ title, skills, Icon }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 flex items-center">
      <Icon className="mr-2" size={24} />
      {title}
    </h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index} className="mb-1">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      Icon: Code,
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "DaisyUI",
        "Bootstrap",
        "Material UI",
        "HeadlessUI",
        "GSAP",
        "Chart.js",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      Icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "bcryptjs",
        "Passport",
        "JSON Web Token (JWT)",
        "Joi",
        "Flask",
        "Stripe API",
      ],
    },
    {
      title: "Data Science & Analytics",
      Icon: BarChart,
      skills: ["Python", "R", "Scikit-learn", "Pandas", "NumPy", "Tableau"],
    },
    {
      title: "Cloud & DevOps",
      Icon: Cloud,
      skills: [
        "AWS S3",
        "AWS Secret Manager",
        "AWS DynamoDB",
        "MongoDB",
        "Firebase",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "General Skills",
      Icon: Wrench,
      skills: [
        "Microsoft Office Suite",
        "Data Analysis",
        "Technical Writing",
        "Problem Solving",
        "JSON",
        "XML",
        "YAML",
        "Restful APIs",
        "Postman API",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            Icon={category.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
