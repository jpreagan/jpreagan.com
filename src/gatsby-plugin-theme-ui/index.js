const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.625rem",
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
    primary: "#f472b6",
    secondary: "#8b5cf6",
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
      fontSize: 4,
      color: "heading",
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
      color: "heading",
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
      color: "heading",
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
      color: "heading",
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
      color: "heading",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
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
  },
}

export default theme
