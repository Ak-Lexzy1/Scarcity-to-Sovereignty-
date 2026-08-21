import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16233D",
          deep: "#0E1729",
        },
        gold: {
          DEFAULT: "#C9A24B",
          soft: "#E4CD8C",
        },
        cream: "#F7F2E7",
        ink: "#1B1B1B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
