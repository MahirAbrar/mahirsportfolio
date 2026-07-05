import React from "react";

const links = [
  { label: "products", href: "#products" },
  { label: "work.log", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "edu", href: "#education" },
];

const Navbar = ({ theme, onToggleTheme }) => (
  <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 px-[14px] py-3 dt:px-10 dt:py-[15px] border-b border-line bg-[var(--nav)] backdrop-blur-[10px]">
    <a
      href="#top"
      aria-label="Home"
      className="flex-none flex items-center gap-2.5 font-mono font-semibold text-[15px] leading-none text-strong no-underline"
    >
      <svg
        viewBox="0 0 64 64"
        width="19"
        height="19"
        aria-hidden="true"
        className="flex-none"
        fill="var(--green)"
      >
        <rect x="7" y="10" width="12" height="44" rx="2" />
        <rect x="26" y="27" width="12" height="10" rx="2" />
        <rect x="45" y="10" width="12" height="44" rx="2" />
      </svg>
      mahir<span className="text-green">@</span>melbourne
    </a>
    <div className="flex items-center gap-4 dt:gap-[22px] min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap font-mono font-medium text-[13px] leading-none">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="flex-none text-dim hover:text-strong no-underline transition-colors duration-150"
        >
          {label}
        </a>
      ))}
      <a
        href="#contact"
        className="flex-none text-green no-underline hover:opacity-80 transition-opacity duration-150"
      >
        ● work with me
      </a>
      <button
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        className="flex-none font-mono font-medium text-xs leading-none text-dim bg-transparent border border-line2 rounded-md px-[11px] py-2 cursor-pointer hover:border-green transition-colors duration-150"
      >
        {theme === "dark" ? "◐ light" : "◑ dark"}
      </button>
    </div>
  </nav>
);

export default Navbar;
