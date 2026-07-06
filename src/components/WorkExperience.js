import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const blockLabel =
  "font-mono font-semibold text-[10px] leading-none tracking-[.12em] mb-[7px]";

const GroupLabel = ({ children, green }) => (
  <div className="flex items-center gap-2.5 mb-4">
    <span
      className={`font-mono font-semibold text-[11px] leading-none tracking-[.14em] ${
        green ? "text-green" : "text-mut"
      }`}
    >
      {children}
    </span>
    <span className="flex-1 h-px bg-line" />
  </div>
);

const Bullet = ({ color, children }) => (
  <div className="flex gap-[11px]">
    <span className={`${color} flex-none`}>▸</span>
    <span>{children}</span>
  </div>
);

const Accordion = ({ header, meta, summary, open, onToggle, green, children, className }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className={`border rounded-[14px] bg-panel overflow-hidden transition-colors duration-150 ${
        green ? "border-green" : "border-line hover:border-line2"
      } ${className || ""}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex justify-between items-center gap-4 px-[22px] py-[18px] cursor-pointer bg-transparent border-none text-left"
      >
        <div>
          <div className="font-sans font-semibold text-[17px] sm:text-lg leading-tight text-strong">
            {header}
          </div>
          <div className="mt-[5px]">{meta || summary}</div>
        </div>
        <span
          className={`font-mono text-[19px] leading-none flex-none ${
            green ? "text-green" : "text-mut"
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: reduceMotion
            ? "none"
            : "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-[22px] pb-[22px] border-t border-line">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const [openAI, setOpenAI] = useState(true);
  const [openCabs, setOpenCabs] = useState(false);
  const [openBd, setOpenBd] = useState(false);

  return (
    <section id="experience" className="py-11 dt:py-16 border-b border-line">
      <SectionHeader num="02" title="Experience" comment="~ % cat work.log" />
      <div className="mt-[30px]">
        <GroupLabel green>{"// CURRENTLY"}</GroupLabel>

        <Accordion
          green
          className="mb-3.5"
          open={openAI}
          onToggle={() => setOpenAI((v) => !v)}
          header="AI Trainer & Evaluator — LLM Training & Evaluation"
          meta={
            <div className="font-mono text-[11px] leading-relaxed text-mut">
              Contract · Oct 2024 — now · remote
            </div>
          }
        >
          <div className="flex flex-col gap-[17px] mt-[18px] max-w-[680px]">
            <div>
              <div className={`${blockLabel} text-mut`}>WHAT I DO</div>
              <div className="text-[15px] leading-[1.65] text-dim">
                Create RLHF preference data and gold-standard SFT
                demonstrations, and evaluate reasoning, coding and safety
                outputs of frontier LLMs and AI agents against structured
                rubrics I help design.
              </div>
            </div>
            <div>
              <div className={`${blockLabel} text-mut`}>SPECIALTY</div>
              <div className="text-[15px] leading-[1.65] text-dim">
                Software-engineering tasks (React, TypeScript, Next.js,
                Python), system-design problems (scalability, caching, database
                architecture, distributed systems), and multi-tool agent
                workflows — pinpointing failures in tool-use correctness and
                reasoning chains.
              </div>
            </div>
            <div>
              <div className={`${blockLabel} text-mut`}>SCALE</div>
              <div className="text-[15px] leading-[1.65] text-dim">
                <strong className="text-strong font-semibold">
                  200+ evaluations
                </strong>{" "}
                across{" "}
                <strong className="text-strong font-semibold">
                  12+ projects
                </strong>
                ; promoted to reviewer on{" "}
                <strong className="text-strong font-semibold">2 of 3</strong>{" "}
                frontend coding-evaluation projects.
              </div>
            </div>
            <div>
              <div className={`${blockLabel} text-mut`}>PLATFORMS</div>
              <div className="font-mono font-medium text-[13.5px] leading-[1.65] text-dim">
                Outlier · Alignerr · Mercor{" "}
                <span className="text-mut">— three concurrent contracts</span>
              </div>
            </div>
            <div>
              <div className={`${blockLabel} text-green`}>PROOF</div>
              <div className="text-[15px] leading-[1.65] text-dim">
                Selected for Anthropic's{" "}
                <strong className="text-strong font-semibold">
                  Claude Code Human Preferences
                </strong>{" "}
                project — iterating on Claude's code generation in real-world
                codebases through expert PR-style reviews and RLHF feedback.
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion
          className="mb-8"
          open={openCabs}
          onToggle={() => setOpenCabs((v) => !v)}
          header={
            <>
              Contact Centre Operator{" "}
              <span className="font-normal text-mut">· 13cabs</span>
            </>
          }
          meta={
            <div className="text-[13px] leading-normal text-dim">
              Live bookings, dispatch &amp; driver ops for Australia's largest
              taxi company. · Aug 2025 — now
            </div>
          }
        >
          <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-dim pt-4 max-w-[660px]">
            <Bullet color="text-amber">
              Dispatch and resolve live booking, driver and payment issues
              across regulated account types (TAC, WorkSafe, DVA) under tight
              call-handling KPIs
            </Bullet>
            <Bullet color="text-amber">
              Monitor all active trips on the supervisor screen — flag service
              breaches, respond to duress alarms, reallocate fleet coverage in
              real time
            </Bullet>
            <Bullet color="text-amber">
              Manually test MTI platform releases from the dev team and feed
              structured reproduction reports back before rollout
            </Bullet>
          </div>
        </Accordion>

        <GroupLabel>{"// PREVIOUSLY"}</GroupLabel>

        <Accordion
          open={openBd}
          onToggle={() => setOpenBd((v) => !v)}
          header={
            <>
              Data Analyst &amp; UI/UX Intern{" "}
              <span className="font-normal text-mut">· BDTax</span>
            </>
          }
          meta={
            <div className="text-[13px] leading-normal text-dim">
              400k-row marketing analysis · dashboards · Figma UI. · Dhaka,
              Bangladesh · Dec 2023 — Jan 2024
            </div>
          }
        >
          <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-dim pt-4 max-w-[660px]">
            <Bullet color="text-mut">
              Analysed a 400,000-row dataset with Pandas, Matplotlib and R to
              derive marketing insights for decision-making
            </Bullet>
            <Bullet color="text-mut">
              Built dynamic visualizations with Matplotlib and IPyWidgets for
              the marketing team
            </Bullet>
            <Bullet color="text-mut">
              Applied Gestalt principles to UI/UX design in Figma to streamline
              user decisions
            </Bullet>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default WorkExperience;
