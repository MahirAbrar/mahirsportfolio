import React from "react";
import { Briefcase, Building2, User, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkExperienceItem = ({
  title,
  company,
  location,
  date,
  responsibilities,
  githubLink,
  references,
  index,
}) => {
  // Create a ref for each work experience item with threshold 0.1
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2, // Stagger the animations
        ease: "easeOut",
      }}
      className="w-full"
    >
      <div className="card bg-base-100 shadow-xl md:mb-8 mb-4">
        <div className="card-body p-4 sm:p-8">
          <div className="flex items-center mb-4">
            <Briefcase className="w-5 h-5 mr-1.5 text-primary dark:text-white" />
            <h3 className="card-title text-2xl sm:text-3xl">{title}</h3>
          </div>
          <div className="flex items-center text-base sm:text-lg dark:opacity-90 opacity-80">
            <Building2 className="w-4 h-4 mr-2.5 text-primary dark:text-white" />
            <span className="font-semibold text-lg sm:text-xl">{company}</span>
            <span className="mx-2">|</span>
            <span>{location}</span>
          </div>
          <div className="text-base sm:text-lg dark:opacity-60 opacity-75 mb-4 ml-6">
            {date}
          </div>

          {/* Animate each responsibility item */}
          <ul className="space-y-4 sm:space-y-2 ml-6 list-none">
            {responsibilities.map((responsibility, respIndex) => (
              <motion.li
                key={respIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.1 + respIndex * 0.1, // Additional staggering
                  ease: "easeOut",
                }}
                className="text-base sm:text-lg dark:opacity-100 opacity-90"
              >
                {responsibility}
              </motion.li>
            ))}
          </ul>

          {/* References section with animations */}
          {references && references.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.5, // Appear after responsibilities
                ease: "easeOut",
              }}
              className="mt-8 border-t pt-4"
            >
              <h4 className="font-semibold mb-4 ml-6">References:</h4>
              {references.map((reference, refIndex) => (
                <motion.div
                  key={refIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2 + 0.6 + refIndex * 0.15,
                    ease: "easeOut",
                  }}
                  className="mb-4 last:mb-0"
                >
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2.5 text-primary dark:text-white" />
                    <span className="font-medium">{reference.name}</span>
                  </div>
                  <div className="text-sm ml-6 mb-2">
                    {reference.position}{" "}
                    {reference.company && <span>at {reference.company}</span>}
                  </div>
                  {reference.email && (
                    <div className="text-sm flex items-center mb-2">
                      <Mail className="w-4 h-4 mr-2.5 text-primary dark:text-white" />
                      <a
                        href={`mailto:${reference.email}`}
                        className="hover:underline"
                      >
                        {reference.email}
                      </a>
                    </div>
                  )}
                  {reference.phone && (
                    <div className="text-sm flex items-center">
                      <Phone className="w-4 h-4 mr-2.5 text-primary dark:text-white" />
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  const experience = [
    {
      title: "Software Engineer – Independent Contractor",
      company: "Outlier AI",
      location: "Remote",
      date: "Oct 2024 – Present",
      responsibilities: [
        "Contribute to LLM training and evaluation pipelines for frontier model labs across multiple projects; promoted to reviewer role on multiple projects.",
        "Evaluate AI-generated responses against structured rubrics covering truthfulness, instruction-following (explicit and implicit), hallucination detection, verbosity, tone and format compliance, and writing quality — producing justified scoring used in SFT and RLHF pipelines.",
        "Analyse and improve AI outputs on software engineering tasks (React, TypeScript, Next.js, Python — often in unfamiliar libraries), system design problems (scalability, caching, database architecture, distributed systems), and math/logic reasoning.",
        "Author prompts and develop rubrics that match training-data quality standards; identify explicit and implicit requirements from prompts and system instructions to define correctness criteria.",
        "Evaluate multi-tool AI agent outputs, assessing tool-use correctness across document retrieval, editing, and multi-step workflows.",
      ],
    },
    {
      title: "Independent Contractor",
      company: "Alignerr AI",
      location: "Melbourne, Victoria, Australia",
      date: "Jan 2025 – Current",
      responsibilities: [
        "Selected for Anthropic's Claude Code Human Preferences project, iterating on Claude's code generation in real-world codebases to achieve production-ready quality through expert PR-style reviews and RLHF feedback",
        "Annotate and label diverse datasets for training advanced AI models, specializing in technical domains including software development, mathematics, and data science",
        "Evaluate and rank AI-generated outputs using RLHF techniques, directly contributing to model alignment and performance improvements for leading AI companies",
        "Conduct red teaming exercises to identify model vulnerabilities and biases, particularly in code generation and technical problem-solving scenarios",
        "Provide expert feedback on AI responses leveraging proficiency in Python, JavaScript, TypeScript, and ML/DL frameworks to enhance model accuracy and capabilities",
      ],
    },
    {
      title: "Contact Centre Operator",
      company: "13cabs (A2B Australia)",
      location: "Melbourne, VIC",
      date: "Aug 2025 – Present",
      responsibilities: [
        "Take passenger bookings via the proprietary MTI platform and dispatch to drivers; manage bookings across multiple regulated account types (TAC, WorkSafe, DVA, and others) with distinct compliance rules that vary by state.",
        "Operate the supervisor screen monitoring all active trips across the fleet in real time; identify service breaches and coordinate resolution by dispatching drivers, sending fleet-wide messages, and reallocating coverage.",
        "Coordinate driver-side operations in helpdesk: issue nojobs and recalls, respond to duress alarms, and resolve payment exceptions in real time under tight call-handling KPIs.",
        "Manually test MTI platform updates from the development team, reproduce issues, and provide structured feedback used to refine releases before rollout.",
        "Resolve complex conflicts between passengers and drivers with varying language and communication abilities, translating between parties to de-escalate and complete trip delivery; provide structured driver and agent performance feedback and suggest process improvements.",
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
        <WorkExperienceItem key={index} {...job} index={index} />
      ))}
    </div>
  );
};

export default WorkExperience;
