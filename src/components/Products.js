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
      "Spaced-repetition learning app with a paying-user pricing model and an installable PWA, serving organic users at retentive.site.",
    chips: ["React", "TypeScript", "PWA", "Supabase", "Stripe"],
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
    stack: "React 18 · TypeScript · Vite · Supabase · Stripe · PWA",
    caseStatus: "live · organic users",
  },
  {
    id: "retentive-ios",
    kicker: "PRODUCT 02",
    status: "● on the App Store",
    name: "Retentive for iOS",
    description:
      "A native iOS & iPadOS study planner that schedules every review for you — built in SwiftUI and running entirely on-device, with no accounts and no analytics.",
    chips: ["Swift 6", "SwiftUI", "SwiftData", "StoreKit 2", "Live Activities"],
    live: {
      label: "App Store ↗",
      href: "https://apps.apple.com/au/app/retentive-spaced-repetition/id6788236605",
    },
    media: `${pub}/retentive-ios/01-home.png`,
    mediaAlt: "Retentive for iOS — Today screen",
    mediaFit: "contain",
    mediaFirst: false,
    film: [
      {
        src: `${pub}/retentive-ios/01-home.png`,
        caption: "today dashboard",
        alt: "Today screen with Study Now, stat tiles and achievements",
      },
      {
        src: `${pub}/retentive-ios/04-studied.png`,
        caption: "library & review states",
        alt: "Library with subjects, topics and due/mastered items",
      },
      {
        src: `${pub}/retentive-ios/06-focus.png`,
        caption: "focus timer",
        alt: "Focus timer with goal presets suggested by learning mode",
      },
      {
        src: `${pub}/retentive-ios/08-stats.png`,
        caption: "stats & streaks",
        alt: "Stats with day streak, performance and daily activity",
      },
    ],
    clipDims: { baseW: 160, baseH: 348, zoomW: 280, zoomH: 609 },
    blocks: [
      {
        label: "WHAT IT IS",
        content:
          "Organise what you're learning into subjects, topics and items, pick a learning mode that matches your deadline, and the app builds the entire review schedule for you — answering the one question every student has: what should I review right now?",
      },
      {
        label: "LEARNING ENGINE",
        content: (
          <>
            Pure, unit-testable Swift — no ML, no server. Four tuned interval
            curves:{" "}
            <strong className="text-strong font-semibold">Deadline</strong>{" "}
            (10m → 12h) for exams under a day away,{" "}
            <strong className="text-strong font-semibold">Sprint</strong> (1h →
            3d), <strong className="text-strong font-semibold">Steady</strong>{" "}
            (1d → 35d) and{" "}
            <strong className="text-strong font-semibold">Evergreen</strong> (1d
            → 150d). Every review is graded perfect, on-time, late or early
            against its timing window — early reviews score zero, so the system
            rewards showing up at the right moment rather than grinding.
          </>
        ),
      },
      {
        label: "FEATURES",
        content:
          "A Today dashboard with due counts and streaks · a Library of subjects, topics and items with search, filters and drag-to-reorder · a Focus timer whose work and break draw from one wall-clock budget, surfacing live adherence on the Lock Screen and in the Dynamic Island · nine analytics cards including a year-long streak heatmap · 24 achievements · a 16-page skippable onboarding that seeds your first real subject.",
      },
      {
        label: "ENGINEERING",
        green: true,
        content:
          "~220 Swift files, ~16k lines. Swift 6 strict concurrency with MainActor-by-default isolation · SwiftData with a versioned schema and migration plan from day one, so shipped user data survives every update · five @Observable stores · a token-based design system resolving per-trait for light and dark · accessibility as a feature, with an app-wide Dynamic Type floor, VoiceOver labels across 40+ files and Reduce Motion honored throughout.",
      },
      {
        label: "PRIVACY",
        content:
          "100% on-device — no accounts, no analytics, and an App Store privacy label of “Data Not Collected”. Local-first by architecture rather than policy: there is no networking code in the app at all.",
      },
      {
        label: "SHIPPING & PRICING",
        content:
          "Free tier of 3 subjects, 8 topics and 40 items, with a single one-time lifetime Pro unlock (StoreKit 2 non-consumable) — no subscription. The cap numbers in the paywall copy are read from the same constants that enforce them. Shipped through a reproducible command-line archive pipeline, TestFlight internal and external testing, and populated-store migration tests before each release.",
      },
    ],
    stack:
      "Swift 6 · SwiftUI · SwiftData · StoreKit 2 · ActivityKit · UserNotifications",
    caseStatus: "live on the App Store · universal iOS & iPadOS",
  },
];

const Chip = ({ children }) => (
  <span className="font-mono font-medium text-[10px] leading-none text-dim border border-line2 rounded-[20px] px-2.5 py-1.5">
    {children}
  </span>
);

const caseLabel = "font-mono font-semibold text-[10px] leading-none tracking-[.12em] text-mut";

const ProductPanel = ({ product, open, onToggle, isLast }) => {
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
        {product.live && (
          <a
            href={product.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-[13px] leading-none text-dim no-underline hover:text-strong transition-colors duration-150"
          >
            {product.live.label}
          </a>
        )}
      </div>
    </div>
  );

  const mediaSide =
    product.mediaFit === "contain" ? (
      <div className="min-h-[300px] sm:min-h-[380px] bg-panel2 overflow-hidden flex items-center justify-center p-7">
        <img
          src={product.media}
          alt={product.mediaAlt}
          loading="lazy"
          className="max-h-[260px] sm:max-h-[330px] w-auto object-contain rounded-[18px] border border-line"
        />
      </div>
    ) : (
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
    <div className={isLast ? "" : "mb-[22px]"}>
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
              {product.blocks ? (
                <>
                  {product.film && (
                    <div style={groupStyle(0.15)} className="mb-5">
                      <ClipStrip
                        clips={product.film}
                        active={open}
                        {...(product.clipDims || {})}
                      />
                    </div>
                  )}
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
      {products.map((product, i) => (
        <ProductPanel
          key={product.id}
          product={product}
          isLast={i === products.length - 1}
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
