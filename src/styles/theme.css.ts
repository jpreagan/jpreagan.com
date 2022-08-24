import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    text: "color-text",
    heading: "color-heading",
    background: "color-background",
    primary: "color-primary",
    secondary: "color-secondary",
    muted: "color-muted",
  },
  font: {
    body: "font-body",
    heading: "font-heading",
  },
  fontWeight: {
    body: "font-weight-body",
    heading: "font-weight-heading",
    bold: "font-weight-bold",
  },
});

createGlobalTheme(":root", vars, {
  color: {
    text: "#b3b3b3",
    heading: "white",
    background: "black",
    primary: "#f472b6",
    secondary: "#db2777",
    muted: "#111",
  },
  font: {
    body: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  fontWeight: {
    body: "400",
    heading: "800",
    bold: "700",
  },
});
