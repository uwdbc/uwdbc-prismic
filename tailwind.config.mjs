/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ["var(--font-michroma)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"]
      },
      colors: {
        gold: "#FFD100",
        lessBlack: "#151515",
        link: "#009DFF"
      }
    },
  },
  plugins: [],
};
