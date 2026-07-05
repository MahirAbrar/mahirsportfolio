import React from "react";

const kv = [
  { key: "role", value: "Software Engineer & Data Scientist" },
  { key: "based", value: "Melbourne, Australia" },
  { key: "focus", value: "RLHF · SFT · LLM evaluation" },
  { key: "building", value: "SaaS products · full-stack apps" },
];

const Hero = () => (
  <header
    id="about"
    className="grid grid-cols-1 dt:grid-cols-[1fr_auto] gap-12 items-center pt-11 pb-11 dt:pt-[84px] dt:pb-[72px] border-b border-line"
  >
    <div>
      <div className="font-mono text-[13px] leading-none text-dim mb-6">
        <span className="text-green">mahir@melbourne</span>{" "}
        <span className="text-mut">~</span>{" "}
        <span className="text-amber">%</span> whoami
        <span className="cursor-blink text-green">▋</span>
      </div>
      <h1 className="font-sans font-semibold text-[clamp(44px,6vw,68px)] leading-[1.02] tracking-[-0.03em] text-strong m-0 mb-[22px]">
        Hamid Abrar Mahir
      </h1>
      <p className="font-serif italic text-2xl leading-[1.4] text-serifink max-w-[600px] m-0 mb-8">
        I ship commercial products — and contract on AI training pipelines for
        frontier AI labs.
      </p>
      <div className="grid grid-cols-1 dt:grid-cols-2 gap-y-1.5 gap-x-11 justify-start font-mono text-[13px] leading-[1.8] mb-9">
        {kv.map(({ key, value }) => (
          <div key={key}>
            <span className="text-mut inline-block w-[84px]">{key}</span>
            <span className="text-body">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="#products"
          className="bg-green text-greenink font-mono font-semibold text-sm leading-none px-[21px] py-3.5 rounded-lg no-underline"
        >
          ./view-work →
        </a>
        <a
          href="https://www.linkedin.com/in/hamid-abrar-mahir/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line2 text-body font-mono font-semibold text-sm leading-none px-[21px] py-3.5 rounded-lg no-underline hover:border-green transition-colors duration-150"
        >
          linkedin ↗
        </a>
      </div>
    </div>
    <img
      src={`${process.env.PUBLIC_URL}/IMG_2631.jpg`}
      alt="Hamid Abrar Mahir"
      className="w-[200px] h-[240px] object-cover rounded-2xl border border-line"
    />
  </header>
);

export default Hero;
