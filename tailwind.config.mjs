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
        body: ["var(--font-open-sans)"],
        display: ["var(--font-inter)"]
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
