import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const categories = {
  "Data Science": [
    "FIT3164",
    "FIT3152",
    "FIT3163",
    "FIT3179",
    "FIT3181",
    "FIT1043",
    "FIT2086",
  ],
  Programming: ["FIT1045", "FIT1008", "FIT2081"],
  Algorithms: ["FIT2004"],
  "Software Development": ["FIT2001", "FIT2095", "FIT1049"],
  Databases: ["FIT2094"],
  Security: ["FIT3173", "FIT1047"],
  Theory: ["FIT2014"],
  "Game Design": ["FIT2073"],
  Mathematics: ["MAT1830", "MAT1841"],
  Business: ["FIT1006", "MON3750"],
  Usability: ["FIT3175"],
};

const units = {
  MON3750: "MONASH INNOVATION GUARANTEE SB",
  FIT3164: "DATA SCIENCE PROJECT 2",
  FIT3173: "SOFTWARE SECURITY",
  FIT2004: "ALGORITHMS AND DATA STRUCTURES",
  FIT3152: "DATA ANALYTICS",
  FIT3175: "USABILITY",
  FIT3163: "DATA SCIENCE PROJECT 1",
  FIT3179: "DATA VISUALISATION",
  FIT3181: "DEEP LEARNING",
  FIT2001: "SYSTEMS DEVELOPMENT",
  FIT2081: "MOBILE APPLICATION DEVELOPMENT",
  FIT2094: "DATABASES",
  FIT2014: "THEORY OF COMPUTATION",
  FIT2073: "GAME DESIGN STUDIO 1",
  FIT2086: "MODELLING FOR DATA ANALYSIS",
  FIT2095: "E-BUSINESS SOFTWARE TECHNOLOGIES",
  FIT1006: "BUSINESS INFORMATION ANALYSIS",
  FIT1045: "ALGORITHMS AND PROGRAMMING FUNDAMENTALS IN PYTHON",
  FIT1047: "INTRODUCTION TO COMPUTER SYSTEMS, NETWORKS AND SECURITY",
  MAT1830: "DISCRETE MATHEMATICS FOR COMPUTER SCIENCE",
  FIT1008: "INTRODUCTION TO COMPUTER SCIENCE",
  FIT1043: "INTRODUCTION TO DATA SCIENCE",
  FIT1049: "IT PROFESSIONAL PRACTICE",
  MAT1841: "CONTINUOUS MATHEMATICS FOR COMPUTER SCIENCE",
};

const CategoryCard = ({ category, unitCodes }) => (
  <motion.div
    className="bg-base-200 p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-semibold mb-2">{category}</h3>
    <ul className="space-y-1">
      {unitCodes.map((unitCode) => (
        <li key={unitCode} className="text-sm">
          <span className="font-medium">{unitCode}:</span> {units[unitCode]}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold  flex items-center">
        <BookOpen className="mr-2" />
        Bachelor of Computer Science in Data Science, Monash University
        Australia.
      </h2>
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        Minor: Mobile Apps Development
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(categories).map(([category, unitCodes]) => (
          <CategoryCard
            key={category}
            category={category}
            unitCodes={unitCodes}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
