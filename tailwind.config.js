/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "click-pointer": {
          "0%, 100%": {
            transform: "translateY(-50%) scale(1)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(-50%) scale(0.95)",
            opacity: 0.8,
          },
        },
        "pulse-opacity": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
      animation: {
        "click-pointer": "click-pointer 1s ease-in-out infinite",
        "pulse-opacity": "pulse-opacity 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#100357",
          secondary: "#a7c7af",
          accent: "#162dd2",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-content": "#1F2937", // gray-800
          background: "#fafafa",
        },
      },
      {
        dark: {
          primary: "#661AE6",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-content": "#F3F4F6", // gray-100
          background: "#001220",
        },
      },
    ],
  },
};
