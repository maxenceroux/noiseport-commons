/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kode: ["Kode Mono", "monospace"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        "neutral-950": "#0a0a0a",
        "neutral-100": "#f5f5f5",
        primary: "#6867AF",
      },
    },
  },
  plugins: [],
};
