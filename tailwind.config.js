/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "30rem",
        dt: "861px",
        wide: "1440px",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        desk: "var(--desk)",
        page: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel2)",
        line: "var(--line)",
        line2: "var(--line2)",
        body: "var(--text)",
        dim: "var(--dim)",
        mut: "var(--mut)",
        strong: "var(--strong)",
        serifink: "var(--serif)",
        green: "var(--green)",
        greenbg: "var(--greenBg)",
        greenink: "var(--greenInk)",
        amber: "var(--amber)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1A7F37",
          secondary: "#96650A",
          accent: "#0A69DA",
          neutral: "#2A2F36",
          "base-100": "#F7F6F2",
          "base-200": "#FFFFFF",
          "base-300": "#EFEDE7",
          info: "#0A69DA",
          success: "#1A7F37",
          warning: "#96650A",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#3FB950",
          secondary: "#D29922",
          accent: "#58A6FF",
          neutral: "#12161C",
          "base-100": "#0B0E11",
          "base-200": "#0E1319",
          "base-300": "#12161C",
          info: "#58A6FF",
          success: "#3FB950",
          warning: "#D29922",
          error: "#F87272",
        },
      },
    ],
  },
};
