/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cryptoBlue: "#0ea5e9",
        cryptoPurple: "#8b5cf6",
        cryptoGold: "#fbbf24",
        cryptoDark: "#0f172a"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(14,165,233,0.5)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
