import type { Config } from "tailwindcss";
import { colors } from "./src/theme/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ["class", '[data-mode="dark"]'],

  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors,
      // colors: {
      //   foreground: {
      //     primary: "var(--color-foreground-primary)",
      //     secondary: "var(--color-foreground-secondary)",
      //     tertiary: "var(--color-foreground-tertiary)",
      //   },
      //   background: {
      //     primary: "var(--color-background-primary)",
      //     secondary: "var(--color-background-secondary)",
      //     tertiary: "var(--color-background-tertiary)",
      //   },
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
