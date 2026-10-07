import type { Config } from "tailwindcss";

// I extend the default theme with warm café colours so the brand feels
// consistent across every page without repeating arbitrary values.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hearth: {
          50: "#faf6f1",
          100: "#f3ebe0",
          200: "#e6d5bc",
          300: "#d4b892",
          400: "#c49a6c",
          500: "#b07d4f",
          600: "#9a6642",
          700: "#7d4f36",
          800: "#684230",
          900: "#57382a",
          950: "#2f1c14",
        },
        oak: {
          50: "#f6f5f1",
          100: "#e9e6db",
          200: "#d4ceb8",
          300: "#b9af8f",
          400: "#a1936f",
          500: "#8f7f5c",
          600: "#7a684c",
          700: "#635340",
          800: "#544638",
          900: "#493d32",
          950: "#28211a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
