import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", num: "00", label: "HERO" },
  { id: "products", num: "01", label: "PRODUCTS" },
  { id: "experience", num: "02", label: "EXPERIENCE" },
  { id: "projects", num: "03", label: "PROJECTS" },
  { id: "skills", num: "04", label: "SKILLS" },
  { id: "education", num: "05", label: "EDUCATION" },
  { id: "contact", num: "06", label: "CONTACT" },
];

const formatTime = () =>
  new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).format(new Date());

const gutterCol =
  "hidden wide:flex fixed top-0 bottom-0 w-14 flex-col items-center justify-between py-[52px] z-40 pointer-events-none";

const Gutters = () => {
  const [current, setCurrent] = useState(SECTIONS[0]);
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = SECTIONS.find((s) => s.id === entry.target.id);
            if (section) setCurrent(section);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className={`${gutterCol} left-0`}>
        <span className="font-mono font-semibold text-[11px] leading-none text-green">
          § {current.num}
        </span>
        <span
          className="font-mono font-medium text-[11px] leading-none tracking-[.32em] uppercase text-mut"
          style={{ writingMode: "vertical-rl" }}
        >
          {current.label}
        </span>
        <span className="font-mono text-[9px] leading-none text-line2">
          00–06
        </span>
      </div>
      <div className={`${gutterCol} right-0`}>
        <span className="font-mono font-semibold text-[11px] leading-none text-mut">
          {time}
        </span>
        <span
          className="font-mono font-medium text-[10px] leading-none tracking-[.28em] text-green"
          style={{ writingMode: "vertical-rl" }}
        >
          ● ALWAYS SHIPPING
        </span>
        <span className="font-mono text-[9px] leading-none text-line2">
          v2.0
        </span>
      </div>
    </>
  );
};

export default Gutters;
