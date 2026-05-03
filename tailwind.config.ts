import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#4BBFEF",
        ocean: "#1A72C0",
        navy: "#0A2540",
        accent: "#3AAFEA",
        tint: "#EBF6FD",
        offwhite: "#FAFAF8",
        charcoal: "#111111",
        midgrey: "#555555",
        lightgrey: "#E8E8E6",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        heading: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;