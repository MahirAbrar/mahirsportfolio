import React from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useRef, useState, useLayoutEffect } from "react";

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
  "Computer Science": ["FIT1045", "FIT1008", "FIT2081", "FIT2004", "FIT2094"],
  "Software Development": ["FIT2001", "FIT2095", "FIT1049"],
  Databases: ["FIT2094"],
  Security: ["FIT3173", "FIT1047"],
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

const CategoryCard = ({ category, unitCodes, index, position, opacity }) => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });

  // Calculate local position based on global mouse position
  useLayoutEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setLocalPosition({
        x: position.x - rect.left,
        y: position.y - rect.top,
      });
    }
  }, [position]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
    >
      <div
        ref={cardRef}
        className="relative bg-base-200 p-4 rounded-lg shadow-md overflow-hidden"
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-lg"
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${localPosition.x}px ${localPosition.y}px, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1) 40%, transparent 70%)`,
          }}
        />

        {/* Card Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <ul className="space-y-1">
            {unitCodes.map((unitCode) => (
              <li key={unitCode} className="text-sm">
                <span className="font-medium">{unitCode}:</span>{" "}
                {units[unitCode]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const gridContainerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // Handle mouse movement over the grid
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Fade spotlight in when mouse enters grid
  const handleMouseEnter = () => {
    setOpacity(1);
  };

  // Fade spotlight out when mouse leaves grid
  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <div className="flex flex-rowitems-start sm:items-center mb-2">
          <BookOpen className="mb-2 sm:mb-2 mr-4" size={48} />
          <div>
            <h2 className="text-md sm:text-xl md:text-4xl font-bold leading-tight">
              Bachelor of Computer Science in Data Science
            </h2>
            <p className="text-lg sm:text-xl mt-1 font-semibold">
              Monash University Australia
            </p>
          </div>
        </div>
        <div className="ml-0 sm:ml-16">
          <h3 className="text-md sm:text-xl">Minor: Mobile Apps Development</h3>
        </div>
      </div>

      <div
        ref={gridContainerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(categories).map(([category, unitCodes], index) => (
          <CategoryCard
            key={category}
            category={category}
            unitCodes={unitCodes}
            index={index}
            position={position}
            opacity={opacity}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
