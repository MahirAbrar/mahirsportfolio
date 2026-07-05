import { useState } from "react";
import SectionHeader from "./SectionHeader";

const EMAIL = "mahirabrar.au@gmail.com";

const doors = [
  {
    title: "Work with me",
    sub: "Full-time SWE / ML roles — Melbourne or remote",
    highlighted: true,
    mailto: `mailto:${EMAIL}?subject=Full-time%20opportunity&body=Hi%20Hamid%2C%0A%0AI'm%20reaching%20out%20about%20a%20role%20at%20`,
  },
  {
    title: "Contract work",
    sub: "LLM eval, data pipelines, full-stack builds",
    mailto: `mailto:${EMAIL}?subject=Contract%20work&body=Hi%20Hamid%2C%0A%0AWe%20need%20help%20with%20`,
  },
  {
    title: "Build together",
    sub: "Got an idea? I ship products — let's talk",
    mailto: `mailto:${EMAIL}?subject=Let's%20build%20something&body=Hi%20Hamid%2C%0A%0AI%20have%20an%20idea%3A%20`,
  },
];

const socials = [
  { label: "→ github", href: "https://github.com/MahirAbrar" },
  { label: "→ linkedin", href: "https://www.linkedin.com/in/hamid-abrar-mahir/" },
  { label: "→ retentive.site ↗", href: "https://retentive.site" },
];

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  return (
    <section id="contact" className="pt-11 pb-14 dt:pt-16 dt:pb-20">
      <div className="mb-7">
        <SectionHeader num="06" title="Get in touch" comment="~ % ./contact" />
      </div>

      <p className="font-serif text-[clamp(24px,3vw,30px)] leading-[1.4] text-strong m-0 mb-[34px] max-w-[720px]">
        Building a product? Need someone who knows LLMs? Or just have an idea
        worth chasing?{" "}
        <span className="text-green italic">Let's make something.</span>
      </p>

      <div className="grid grid-cols-1 dt:grid-cols-3 gap-3.5 mb-9">
        {doors.map(({ title, sub, mailto, highlighted }) => (
          <a
            key={title}
            href={mailto}
            className={`block rounded-xl px-5 py-[18px] no-underline hover:-translate-y-0.5 transition-transform duration-150 ${
              highlighted
                ? "border border-green bg-greenbg"
                : "border border-line bg-panel hover:border-line2"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans font-semibold text-[15px] leading-tight text-strong">
                {title}
              </span>
              <span
                className={`font-mono text-[13px] leading-none ${
                  highlighted ? "text-green" : "text-mut"
                }`}
              >
                →
              </span>
            </div>
            <div className="text-[12.5px] leading-[1.55] text-dim">{sub}</div>
          </a>
        ))}
      </div>

      <div className="flex justify-between items-end flex-wrap gap-5">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <a
              href={`mailto:${EMAIL}`}
              className="font-serif italic text-xl sm:text-[26px] leading-tight text-strong no-underline border-b-2 border-green inline-block pb-1"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="font-mono font-medium text-[11px] leading-none text-dim bg-transparent border border-line2 rounded-md px-2.5 py-1.5 cursor-pointer hover:border-green transition-colors duration-150"
            >
              {copied ? "copied ✓" : "copy"}
            </button>
          </div>
          <div className="mt-3 font-mono text-[11px] leading-relaxed text-mut">
            each door opens email with the subject pre-filled · replies &lt;
            24h · Melbourne AEST
          </div>
        </div>
        <div className="flex gap-[18px] font-mono font-medium text-[13px] leading-none">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue no-underline hover:opacity-80 transition-opacity duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
