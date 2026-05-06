import type { Config } from "tailwindcss";
import siteConfig from "./config.json";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: siteConfig.theme.colors.background,
        card: siteConfig.theme.colors.card,
        primary: siteConfig.theme.colors.primary,
        textMain: siteConfig.theme.colors.textMain,
        textMuted: siteConfig.theme.colors.textMuted,
      },
    },
  },
  plugins: [],
};
export default config;
