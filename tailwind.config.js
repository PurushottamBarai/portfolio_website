/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        cursive: ["Caveat", "cursive"],
      },
      colors: {
        black: "#0a0a0a",
        offwhite: "#f9f8f4",
      },
    },
  },
  plugins: [],
};
