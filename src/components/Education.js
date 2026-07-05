import React from "react";
import SectionHeader from "./SectionHeader";

const pillars = [
  {
    label: "AI & DATA",
    color: "text-green",
    units: [
      "Deep Learning",
      "Data Visualisation",
      "Data Science Capstone 1 & 2",
      "Data Analytics",
    ],
  },
  {
    label: "CORE CS",
    color: "text-blue",
    units: [
      "Algorithms & Data Structures",
      "Discrete Mathematics",
      "Databases",
      "Software Security",
    ],
  },
  {
    label: "PRODUCT",
    color: "text-amber",
    units: [
      "Mobile App Development (minor)",
      "Usability",
      "Systems Development",
      "Business Information Analysis",
    ],
  },
];

const Education = () => (
  <section id="education" className="py-11 dt:py-16 border-b border-line">
    <div className="mb-[26px]">
      <SectionHeader num="05" title="Education" />
    </div>
    <div className="mb-6">
      <div className="font-serif text-2xl leading-tight text-strong">
        Bachelor of Computer Science <span className="italic">in Data Science</span>
      </div>
      <div className="text-sm text-dim mt-1.5">
        Monash University, Melbourne · minor in Mobile Apps Development
      </div>
    </div>
    <div className="grid grid-cols-1 dt:grid-cols-3 gap-3.5">
      {pillars.map(({ label, color, units }) => (
        <div
          key={label}
          className="border border-line rounded-xl bg-panel p-5"
        >
          <div
            className={`font-mono font-semibold text-[10px] leading-none tracking-[.12em] mb-3 ${color}`}
          >
            {label}
          </div>
          <div className="text-[13.5px] leading-loose text-dim">
            {units.map((unit) => (
              <div key={unit}>{unit}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 font-mono text-[11px] leading-relaxed text-mut">
      24 units · 3 pillars · full transcript on request
    </div>
  </section>
);

export default Education;
