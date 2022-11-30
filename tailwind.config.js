const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Inter", ...defaultTheme.fontFamily.sans],
      body: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tight: "-0.015em",
      },
      lineHeight: {
        tighter: "1.1111111",
      },
      screens: {
        tablet: "520px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": colors.gray[700],
            "--tw-prose-headings": colors.gray[900],
            "--tw-prose-lead": colors.gray[600],
            "--tw-prose-links": colors.gray[900],
            "--tw-prose-bold": colors.gray[900],
            "--tw-prose-counters": colors.gray[500],
            "--tw-prose-bullets": colors.gray[300],
            "--tw-prose-hr": colors.gray[200],
            "--tw-prose-quotes": colors.gray[900],
            "--tw-prose-quote-borders": colors.gray[200],
            "--tw-prose-captions": colors.gray[500],
            "--tw-prose-code": "#1a1b26",
            "--tw-prose-invert-pre-code": "#a9b1d6",
            "--tw-prose-invert-pre-bg": "#1a1b26",
            "--tw-prose-th-borders": colors.gray[300],
            "--tw-prose-td-borders": colors.gray[200],
            "--tw-prose-invert-body": colors.gray[400],
            "--tw-prose-invert-headings": colors.gray[100],
            "--tw-prose-invert-lead": colors.gray[500],
            "--tw-prose-invert-links": colors.gray[100],
            "--tw-prose-invert-bold": colors.gray[100],
            "--tw-prose-invert-counters": colors.gray[500],
            "--tw-prose-invert-bullets": colors.gray[700],
            "--tw-prose-invert-hr": colors.gray[800],
            "--tw-prose-invert-quotes": colors.gray[200],
            "--tw-prose-invert-quote-borders": colors.gray[800],
            "--tw-prose-invert-captions": colors.gray[500],
            "--tw-prose-invert-code": "#a9b1d6",
            "--tw-prose-invert-pre-code": "#a9b1d6",
            "--tw-prose-invert-pre-bg": "#1a1b26",
            "--tw-prose-invert-th-borders": colors.gray[700],
            "--tw-prose-invert-td-borders": colors.gray[800],
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
