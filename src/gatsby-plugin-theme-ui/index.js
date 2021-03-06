import { getColor } from "@theme-ui/color"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"

const theme = {
  breakpoints: ["43.75em", "43.75em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.625rem",
    "4rem",
  ],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: ["#f472b6", "#ec4899", "#db2777"],
    secondary: ["#8b5cf6", "#6d28d9", "#5b21b6"],
    heading: "#fff",
    text: "#d6deeb",
    muted: "#637777",
    background: "#021320",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      letterSpacing: "-0.015em",
      marginTop: 5,
      marginBottom: 3,
    },
  },
  sizes: {
    container: 1000,
  },
  layout: {
    page: {
      px: 3,
    },
  },
  forms: {
    label: {
      fontFamily: "heading",
      fontSize: 1,
    },
    input: {
      color: "black",
      backgroundColor: "white",
      fontFamily: "body",
      fontSize: 2,
    },
    textarea: {
      color: "black",
      backgroundColor: "white",
      fontFamily: "body",
      fontSize: 2,
    },
  },
  links: {
    heading: {
      color: "heading",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    subheading: {
      color: "text",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    social: {
      color: "text",
      "&:hover": {
        color: "heading",
      },
    },
  },
  buttons: {
    primary: {
      backgroundImage: t => `
        linear-gradient(
          to right,
          ${getColor(t, "secondary.2")},
          ${getColor(t, "primary.2")}
        )
      `,
      "&:hover": {
        backgroundImage: t => `
        linear-gradient(
          to right,
          ${getColor(t, "secondary.1")},
          ${getColor(t, "primary.1")}
        )
      `,
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
      color: "heading",
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
      color: "heading",
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, 4],
      color: "heading",
    },
    h4: {
      variant: "text.heading",
      fontSize: [2, 3],
      color: "heading",
    },
    h5: {
      variant: "text.heading",
      fontSize: [1, 2],
      color: "heading",
    },
    h6: {
      variant: "text.heading",
      fontSize: [0, 1],
      color: "heading",
    },
    pre: {
      overflowX: "auto",
      padding: 3,
      borderRadius: 6,
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
      ...nightOwl,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    a: {
      color: "primary.0",
      "&:hover": {
        textDecoration: "none",
      },
    },
    p: {
      fontSize: [2, 3],
    },
    li: {
      fontSize: [2, 3],
    },
    blockquote: {
      borderLeftColor: "primary",
      borderLeftStyle: "solid",
      borderLeftWidth: "6px",
      mx: 0,
      pl: 4,
      p: {
        fontStyle: "italic",
      },
    },
  },
}

export default theme
