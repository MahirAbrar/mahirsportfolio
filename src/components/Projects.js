import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ClipStrip from "./ClipStrip";

const pub = process.env.PUBLIC_URL;

const caseLabel =
  "font-mono font-semibold text-[10px] leading-none tracking-[.12em] text-mut";

const projects = [
  {
    key: "attirealley",
    name: "AttireAlley",
    lang: "JavaScript",
    dotColor: "#f1e05a",
    year: "2024",
    description:
      "A production e-commerce platform with role-based admin, Stripe payments and AI-powered outfit suggestions.",
    chips: ["Next.js", "MongoDB", "Stripe", "OpenAI"],
    thumb: `${pub}/attirealley/aalanding.png`,
    thumbAlt: "AttireAlley storefront",
    clips: [
      {
        src: `${pub}/attirealley/aapageshowarc.gif`,
        caption: "storefront & cart",
      },
      { src: `${pub}/attirealley/aaai.gif`, caption: "AI outfit suggestions" },
      { src: `${pub}/attirealley/aacheckout.gif`, caption: "checkout flow" },
    ],
    whatItIs:
      "A complete store — customer side (browse, cart, Stripe checkout, order tracking) and admin side (dashboard, product & order management), plus AI outfit suggestions via the OpenAI API.",
    engineering:
      "JWT auth with httpOnly cookies & auto-refresh · role-based access control · Stripe webhooks · rate limiting · MongoDB with size-level inventory.",
    stack: "Next.js 14 · MongoDB · Stripe · OpenAI · Firebase · Tailwind",
    status: "live",
    code: "https://github.com/MahirAbrar/AttireAlley",
    live: { label: "live ↗", href: "https://attirealley.vercel.app/" },
  },
  {
    key: "leetcode-ai",
    name: "Leetcode AI Assistant",
    lang: "JavaScript",
    dotColor: "#f1e05a",
    year: "2025",
    description:
      "A Chrome extension providing AI-powered Leetcode help that guides without giving the answer away.",
    chips: ["Chrome MV3", "Groq API", "JavaScript"],
    thumb: `${pub}/leetcodeai.png`,
    thumbAlt: "Leetcode AI Assistant",
    mediaFit: "contain",
    clips: [
      { src: `${pub}/leetcode/lcgif.gif`, caption: "assistant in action" },
      { src: `${pub}/leetcode/lcpopup.png`, caption: "popup & modes" },
      { src: `${pub}/leetcode/lcfullsettings.png`, caption: "settings" },
    ],
    whatItIs:
      "Three assistance modes — hints, critical thinking, and step-by-step guidance — powered by fast Groq-hosted models, integrated directly into the Leetcode interface.",
    engineering:
      "Manifest V3 with content scripts injected into Leetcode · background service worker for API calls · Chrome Storage for settings · minimal permissions (storage + activeTab).",
    stack: "JavaScript · Chrome Extension (MV3) · Groq API",
    status: "on GitHub",
    code: "https://github.com/MahirAbrar/leetcode-ai-assistant",
  },
  {
    key: "maxmomentum",
    name: "Max Momentum",
    lang: "TypeScript",
    dotColor: "#3178c6",
    year: "2025",
    description:
      "An AI-powered calendar and to-do SaaS with intelligent scheduling and daily planning.",
    chips: ["Next.js", "Supabase", "OpenAI", "TypeScript"],
    thumb: `${pub}/maxmomentum/maxmomentum.png`,
    thumbAlt: "Max Momentum",
    clips: [],
    whatItIs:
      "A calendar and to-do list in one — intelligent scheduling, daily planning, automatic reordering of missed tasks, and productivity scoring on a freemium model.",
    engineering:
      "Next.js + Supabase with OpenAI-powered planning · auth and profile management · AI interaction limits backed by subscription tiers.",
    stack: "Next.js · Supabase · OpenAI · TypeScript",
    status: "live",
    live: { label: "live ↗", href: "https://maxmomentum.vercel.app/" },
  },
  {
    key: "pricewise",
    name: "PriceWise M5",
    lang: "Python",
    dotColor: "#3572A5",
    year: "2024",
    description:
      "A pricing-optimization tool that models price elasticity on the 1.2M-row M5 retail dataset.",
    chips: ["Flask", "scikit-learn", "AWS", "React"],
    thumb: `${pub}/pricewise/pricewise.png`,
    thumbAlt: "PriceWise M5",
    clips: [{ src: `${pub}/pricewise.gif`, caption: "prediction dashboard" }],
    whatItIs:
      "Price-elasticity models estimate product demand at different price points and find revenue-optimal prices. Monash final-year data-science project, built in a team of four.",
    engineering:
      "Flask + scikit-learn polynomial regression · AWS S3 storage with DynamoDB prediction caching that cut response times from 15s to under 200ms · Chart.js visualisations.",
    stack: "React · Flask · scikit-learn · AWS S3 · DynamoDB",
    status: "complete · Monash capstone",
    code: "https://github.com/MahirAbrar/PriceWise.M5",
  },
  {
    key: "nyc-traffic",
    name: "NYC Traffic Collisions",
    lang: "R",
    dotColor: "#198CE7",
    year: "2023",
    description:
      "A Tableau visual analysis of 2.1M NYC traffic collisions for policymakers and the public.",
    chips: ["R", "Tableau", "NYC Open Data"],
    thumb: `${pub}/trafficimage.png`,
    thumbAlt: "NYC Traffic Collisions dashboard",
    clips: [{ src: `${pub}/trafficprob.gif`, caption: "dashboard tour" }],
    whatItIs:
      "Hotspot heatmaps, vehicle-type analysis, injury trends and the safest times to travel across 2.1M police-reported collisions (2018–2022), designed colour-blind accessible.",
    engineering:
      "R preprocessing of 2.1M rows (cleaning, time formatting) · Tableau dashboards with storytelling annotations · NYC Open Data + Kaggle sources.",
    stack: "R · Tableau · NYC Open Data",
    status: "published on Tableau Public",
    live: {
      label: "tableau ↗",
      href: "https://public.tableau.com/app/profile/hamid.abrar.mahir/viz/Book1_16931793449790/Dashboard1",
    },
  },
];

const Chip = ({ children }) => (
  <span className="font-mono font-medium text-[10px] leading-none text-dim border border-line2 rounded-[20px] px-2.5 py-1.5">
    {children}
  </span>
);

const ProjectPanel = ({ project, index, open, onToggle, isLast }) => {
  const reduceMotion = useReducedMotion();
  const mediaFirst = index % 2 === 0;

  const groupStyle = (delay) => ({
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(14px)",
    transition: reduceMotion
      ? "none"
      : `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
  });

  const textSide = (
    <div className="px-6 py-7 sm:px-[34px] sm:py-8 flex flex-col justify-center">
      <div className="font-mono font-medium text-[11px] leading-none text-amber mb-3">
        PROJECT {String(index + 1).padStart(2, "0")} ·{" "}
        <span style={{ color: project.dotColor }}>● {project.lang}</span>{" "}
        <span className="text-mut">· {project.year}</span>
      </div>
      <h3 className="font-serif font-normal text-[32px] leading-none text-strong m-0 mb-3">
        {project.name}
      </h3>
      <p className="text-[14.5px] leading-[1.65] text-dim m-0 mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
      <div className="flex gap-[18px]">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="bg-transparent border-none p-0 cursor-pointer font-mono font-semibold text-[13px] leading-none text-green"
        >
          {open ? "− close case" : "read case →"}
        </button>
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[13px] leading-none text-dim no-underline hover:text-strong transition-colors duration-150"
          >
            code ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[13px] leading-none text-dim no-underline hover:text-strong transition-colors duration-150"
          >
            {project.live.label}
          </a>
        )}
      </div>
    </div>
  );

  const mediaSide =
    project.mediaFit === "contain" ? (
      <div className="min-h-[220px] sm:min-h-[280px] bg-panel2 overflow-hidden flex items-center justify-center p-8">
        <img
          src={project.thumb}
          alt={project.thumbAlt}
          loading="lazy"
          className="max-h-[220px] w-auto object-contain rounded-xl"
        />
      </div>
    ) : (
      <div className="min-h-[220px] sm:min-h-[280px] bg-panel2 overflow-hidden">
        <img
          src={project.thumb}
          alt={project.thumbAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>
    );

  return (
    <div className={isLast ? "" : "mb-[22px]"}>
      <div
        className={`grid grid-cols-1 ${
          mediaFirst
            ? "dt:grid-cols-[1.1fr_1fr]"
            : "dt:grid-cols-[1fr_1.1fr]"
        } border border-line rounded-2xl overflow-hidden bg-panel`}
      >
        {mediaFirst ? (
          <>
            {mediaSide}
            {textSide}
          </>
        ) : (
          <>
            <div className="order-last dt:order-first">{textSide}</div>
            {mediaSide}
          </>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: reduceMotion
            ? "none"
            : "grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="border border-line border-t-0 rounded-b-2xl bg-panel px-6 sm:px-[34px] pt-[26px] pb-[30px]">
            {project.clips.length > 0 && (
              <div style={groupStyle(0.15)} className="mb-5">
                <ClipStrip
                  clips={project.clips}
                  active={open}
                  baseW={280}
                  baseH={158}
                />
              </div>
            )}
            <div
              style={groupStyle(0.28)}
              className="grid grid-cols-1 dt:grid-cols-2 gap-y-[18px] gap-x-8 mb-5"
            >
              <div>
                <div className={`${caseLabel} mb-[7px]`}>WHAT IT IS</div>
                <div className="text-sm leading-[1.65] text-dim">
                  {project.whatItIs}
                </div>
              </div>
              <div>
                <div className={`${caseLabel} mb-[7px] !text-green`}>
                  ENGINEERING
                </div>
                <div className="text-sm leading-[1.65] text-dim">
                  {project.engineering}
                </div>
              </div>
            </div>
            <div
              style={groupStyle(0.4)}
              className="grid grid-cols-1 dt:grid-cols-2 gap-y-2.5 gap-x-8 text-[13px] leading-relaxed text-dim"
            >
              <div>
                <span className={`${caseLabel} mr-3`}>STACK</span>
                {project.stack}
              </div>
              <div>
                <span className={`${caseLabel} mr-3`}>STATUS</span>
                <span className="text-green">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section id="projects" className="py-11 dt:py-16 border-b border-line">
      <SectionHeader
        num="03"
        title="Projects"
        comment="~ % ls experiments/"
        sub="Smaller builds, experiments and coursework — breadth over polish."
      />
      {projects.map((project, index) => (
        <ProjectPanel
          key={project.key}
          project={project}
          index={index}
          isLast={index === projects.length - 1}
          open={openKey === project.key}
          onToggle={() =>
            setOpenKey((k) => (k === project.key ? null : project.key))
          }
        />
      ))}
    </section>
  );
};

export default Projects;
