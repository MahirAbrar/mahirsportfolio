import React from "react";
import SectionHeader from "./SectionHeader";

const skillRows = [
  {
    cat: "AI / ML",
    items:
      "PyTorch · RLHF · SFT · Hugging Face · Transformers · LangChain · prompt evaluation · model alignment · data annotation",
  },
  {
    cat: "Languages",
    items: "Python · TypeScript · JavaScript · Java · SQL · Swift · R",
  },
  {
    cat: "Web & Mobile",
    items:
      "React · Next.js · Node · Tailwind · DaisyUI · Framer Motion · PWA · SwiftUI · REST APIs",
  },
  {
    cat: "Data",
    items:
      "Pandas · NumPy · scikit-learn · Matplotlib · PostgreSQL · MongoDB · data pipelines · visualization",
  },
  {
    cat: "Tools & Infra",
    items: "Git · AWS · Vercel · Supabase · Stripe · Firebase · Figma · Tableau",
  },
];

const Skills = () => (
  <section id="skills" className="py-11 dt:py-16 border-b border-line">
    <div className="mb-[34px]">
      <SectionHeader num="04" title="What I work with" comment="~ % cat skills" />
    </div>
    <div className="flex flex-col">
      {skillRows.map(({ cat, items }) => (
        <div
          key={cat}
          className="grid grid-cols-1 dt:grid-cols-[190px_1fr] gap-1 dt:gap-6 py-[17px] border-t border-line"
        >
          <div className="font-mono font-medium text-sm leading-normal text-strong">
            {cat}
          </div>
          <div className="text-[15px] leading-[1.75] text-dim">{items}</div>
        </div>
      ))}
      <div className="border-t border-line" />
    </div>
  </section>
);

export default Skills;
