import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "hero",
      layout: {
        fontSize: {
          // root font size for devices that support it
          tiny: "100%", //mobile
          small: "125%", //sm
          medium: "150%", //md
          large: "200%", //lg
        },
      },
      // common layout tokens (applied to all themes)
      themes: {
        light: {
          colors: {
            background: "#F0F8FF",
            foreground: "#050006",

            primary: {
              DEFAULT: "#a32cc4",

              50: "#fce7ff",
              100: "#e8c0f5",
              200: "#d796ea",
              300: "#c66cdf",
              400: "#b544d5",
              500: "#9c2abb",
              600: "#792093",
              700: "#581569",
              800: "#350b41",
              900: "#15021a",
            },

            secondary: {
              DEFAULT: "#01060D",

              50: "#e7f0fd",
              100: "#bcd3f5",
              200: "#90b6ee",
              300: "#6499e9",
              400: "#3f7ce5",
              500: "#2c62cc",
              600: "#224c9e",
              700: "#183770",
              800: "#0d2143",
              900: "#020b18",
            },

            success: {
              DEFAULT: "#00F208",
            },

            danger: {
              DEFAULT: "#F20000",
            },
          }, // light theme colors
        },

        dark: {
          colors: {
            foreground: "#F0F8FF",
            background: "#050006",

            primary: {
              DEFAULT: "#a32cc4",

              50: "#fce7ff",
              100: "#e8c0f5",
              200: "#d796ea",
              300: "#c66cdf",
              400: "#b544d5",
              500: "#9c2abb",
              600: "#792093",
              700: "#581569",
              800: "#350b41",
              900: "#15021a",
            },

            secondary: {
              DEFAULT: "#01060D",

              50: "#e7f0fd",
              100: "#bcd3f5",
              200: "#90b6ee",
              300: "#6499e9",
              400: "#3f7ce5",
              500: "#2c62cc",
              600: "#224c9e",
              700: "#183770",
              800: "#0d2143",
              900: "#020b18",
            },

            success: {
              DEFAULT: "#00F208",
            },

            danger: {
              DEFAULT: "#F20000",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
