/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00f3ff",
        "terminal-black": "#000000",
        "terminal-text": "#d1f7ff",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Roboto Mono"', "monospace"],
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scan: "scan 2s linear infinite",
      },
    },
  },
  plugins: [],
};
