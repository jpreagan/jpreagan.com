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
    text: "#d6deeb",
    heading: "white",
    background: "#021320",
    primary: "#f472b6",
    muted: "#637777",
  },
  font: {
    body: "Source Sans Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  fontWeight: {
    body: "400",
    heading: "800",
    bold: "700",
  },
});
