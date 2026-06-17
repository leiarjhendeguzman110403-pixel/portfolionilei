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
        // Define your design's precise primary, secondary, and dark background hex codes here
        brand: {
          background: "#0a0a0a",
          surface: "#121212",
          accent: "#3b82f6", 
          textPrimary: "#ffffff",
          textSecondary: "#a3a3a3",
        },
      },
    },
  },
  plugins: [],
};
export default config;