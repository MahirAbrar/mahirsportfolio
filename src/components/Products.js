import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ClipStrip from "./ClipStrip";
import Media from "./Media";

const pub = process.env.PUBLIC_URL;

const products = [
  {
    id: "retentive",
    kicker: "PRODUCT 01",
    status: "● deployed · paying users",
    name: "Retentive",
    description:
      "Spaced-repetition learning app with a paying-user pricing model, an installable PWA, and a native SwiftUI iOS rebuild in progress.",
    chips: ["React", "TypeScript", "PWA", "SwiftUI", "Stripe"],
    live: { label: "retentive.site ↗", href: "https://retentive.site" },
    media: `${pub}/retentive/retentive-image.png`,
    mediaAlt: "Retentive — Unlock Your Superhuman Memory",
    mediaFirst: true,
    film: [
      {
        src: `${pub}/retentive/main page.gif`,
        caption: "main dashboard",
        alt: "Retentive main dashboard",
      },
      {
        src: `${pub}/retentive/retentive-clicking-study.mp4`,
        caption: "starting a session",
        alt: "Starting a study session",
      },
      {
        src: `${pub}/retentive/retentive-in-review-window.png`,
        caption: "review flow",
        alt: "Review window",
      },
      {
        src: `${pub}/retentive/retentive-creating-topics.mp4`,
        caption: "creating topics",
        alt: "Creating topics",
      },
      {
        src: `${pub}/retentive/stats page.gif`,
        caption: "stats & charts",
        alt: "Stats and charts",
      },
      {
        src: `${pub}/retentive/retentive-archive-maintain-mastery.mp4`,
        caption: "archive & mastery",
        alt: "Archive and mastery flow",
      },
    ],
    blocks: [
      {
        label: "PROBLEM",
        content:
          "Most studying doesn't stick — we cram, review once, and forget within days. Note-taking apps do nothing to fight the forgetting curve.",
      },
      {
        label: "SOLUTION",
        content: (
          <>
            Reviews scheduled at the scientifically-optimal moment — right
            before you'd forget. Four modes —{" "}
            <strong className="text-strong font-semibold">
              Ultra-Cram, Cram, Steady, Extended
            </strong>{" "}
            — adapt the cadence from night-before cramming to long-term
            retention.
          </>
        ),
      },
      {
        label: "MODES",
        content:
          "Ultra-Cram (30s → 7d) for exam eve · Cram (2h → 14d) for presentations and interviews · Steady (1d → 30d) for coursework · Extended (3d → 60d) for background knowledge.",
      },
      {
        label: "FEATURES",
        content:
          "Focus timer with real-time adherence tracking · points, levels, streaks and 24 achievements · interactive progress charts · topics and subtopics · offline support with cloud sync · export your data anytime.",
      },
      {
        label: "ENGINEERING",
        green: true,
        content:
          "Two-tier cache with optimistic UI · Supabase Postgres with per-user Row Level Security · offline-first PWA with auto-recovery · Stripe subscriptions.",
      },
      {
        label: "BUSINESS",
        content: (
          <>
            Live at{" "}
            <a
              href="https://retentive.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-strong font-semibold no-underline hover:text-green transition-colors duration-150"
            >
              retentive.site
            </a>{" "}
            with organic users · 14-day free trial, no credit card · plans from
            $2.50/mo.
          </>
        ),
      },
    ],
    stack: "React 18 · TypeScript · Vite · Supabase · Stripe · PWA · SwiftUI",
    caseStatus: "live · organic users · iOS in progress",
  },
];

const Chip = ({ children }) => (
  <span className="font-mono font-medium text-[10px] leading-none text-dim border border-line2 rounded-[20px] px-2.5 py-1.5">
    {children}
  </span>
);

const caseLabel = "font-mono font-semibold text-[10px] leading-none tracking-[.12em] text-mut";

const ProductPanel = ({ product, open, onToggle }) => {
  const reduceMotion = useReducedMotion();
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
        {product.kicker} · <span className="text-green">{product.status}</span>
      </div>
      <h3 className="font-serif font-normal text-[32px] leading-none text-strong m-0 mb-3">
        {product.name}
      </h3>
      <p className="text-[14.5px] leading-[1.65] text-dim m-0 mb-5">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {product.chips.map((chip) => (
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
        <a
          href={product.live.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-semibold text-[13px] leading-none text-dim no-underline hover:text-strong transition-colors duration-150"
        >
          {product.live.label}
        </a>
      </div>
    </div>
  );

  const mediaSide = (
    <div className="min-h-[220px] sm:min-h-[280px] bg-panel2 overflow-hidden">
      <Media
        src={product.media}
        alt={product.mediaAlt}
        poster={product.mediaPoster}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );

  return (
    <div className={product.id === "retentive" ? "mb-[22px]" : ""}>
      <div
        className={`grid grid-cols-1 ${
          product.mediaFirst
            ? "dt:grid-cols-[1.1fr_1fr]"
            : "dt:grid-cols-[1fr_1.1fr]"
        } border border-line rounded-2xl overflow-hidden bg-panel`}
      >
        {product.mediaFirst ? (
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
              {product.film ? (
                <>
                  <div style={groupStyle(0.15)} className="mb-5">
                    <ClipStrip clips={product.film} active={open} />
                  </div>
                  <div
                    style={groupStyle(0.28)}
                    className="grid grid-cols-1 dt:grid-cols-2 gap-y-[18px] gap-x-8 mb-5"
                  >
                    {product.blocks.map(({ label, content, green }) => (
                      <div key={label}>
                        <div
                          className={`${caseLabel} mb-[7px] ${
                            green ? "!text-green" : ""
                          }`}
                        >
                          {label}
                        </div>
                        <div className="text-sm leading-[1.65] text-dim">
                          {content}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div style={groupStyle(0.15)}>
                    <div className={`${caseLabel} mb-2`}>THE STORY</div>
                    <p className="text-sm leading-[1.65] text-dim m-0 mb-5 max-w-[620px]">
                      {product.story}
                    </p>
                  </div>
                  <div
                    style={groupStyle(0.28)}
                    className="grid grid-cols-1 dt:grid-cols-2 gap-3 mb-5"
                  >
                    {product.caseMedia.map(({ src, alt }) => (
                      <div
                        key={src}
                        className="rounded-[9px] border border-line bg-panel2 overflow-hidden"
                      >
                        <Media
                          src={src}
                          alt={alt}
                          className="w-full h-auto block"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div
                style={groupStyle(0.4)}
                className="grid grid-cols-1 dt:grid-cols-2 gap-y-2.5 gap-x-8 text-[13px] leading-relaxed text-dim"
              >
                <div>
                  <span className={`${caseLabel} mr-3`}>STACK</span>
                  {product.stack}
                </div>
                <div>
                  <span className={`${caseLabel} mr-3`}>STATUS</span>
                  <span className="text-green">{product.caseStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const Products = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="products" className="py-11 dt:py-16 border-b border-line">
      <SectionHeader
        num="01"
        title="Products"
        comment="live · with real users"
        sub="Things I built, shipped, and still run."
      />
      {products.map((product) => (
        <ProductPanel
          key={product.id}
          product={product}
          open={openId === product.id}
          onToggle={() =>
            setOpenId((id) => (id === product.id ? null : product.id))
          }
        />
      ))}
    </section>
  );
};

export default Products;
