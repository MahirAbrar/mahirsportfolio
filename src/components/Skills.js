import React, { useRef } from "react";
import { Code, Server, BarChart, Wrench, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import BubbleCursor from "./cursor/BubbleCursor";

const SkillCategory = ({ title, skills, Icon, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2, // Stagger the categories
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2 + i * 0.1, // Stagger the skills within each category
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      className="mb-6 text-center p-6 rounded-xl backdrop-blur-sm bg-opacity-50 bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h3
        className="text-xl font-bold mb-4 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <Icon className="mr-2" size={24} />
        {title}
      </motion.h3>
      <ul className="list-none space-y-2">
        {skills.map((skill, i) => (
          <motion.li
            key={i}
            className="mb-1 py-1 px-3 rounded-full hover:bg-base-200 transition-colors inline-block m-1"
            variants={skillVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const skillsRef = useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      Icon: Code,
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Material UI",
        "HeadlessUI",
        "GSAP",
        "Framer Motion",
        "Figma",
      ],
    },
    {
      title: "Backend",
      Icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Django Rest Framework",
        "JSON Web Token (JWT)",
        "Flask",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
      ],
    },
    {
      title: "Data Science & Analytics",
      Icon: BarChart,
      skills: [
        "Python",
        "R",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Tableau",
        "SymPy",
        "Matplotlib",
        "Excel",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      title: "Cloud & DevOps",
      Icon: Cloud,
      skills: [
        "AWS S3",
        "AWS DynamoDB",
        "MongoDB",
        "Firebase Realtime Database",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "General Skills",
      Icon: Wrench,
      skills: [
        "Data Analysis",
        "Technical Writing",
        "Problem Solving",
        "Restful APIs",
        "Agile Methodologies",
        "Collaboration Tools",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={skillsRef}
      className="w-full px-4 text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <BubbleCursor wrapperElement={skillsRef.current} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            Icon={category.Icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
