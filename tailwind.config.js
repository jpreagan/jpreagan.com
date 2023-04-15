const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out",
        tada: "tada 1s ease-in-out",
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
