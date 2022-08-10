import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0,
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

globalStyle("html", {
  background: vars.color.background,
  color: vars.color.text,
});

globalStyle("body", {
  fontSize: "1rem",
  fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  lineHeight: "1.5",
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  color: vars.color.heading,
  fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontWeight: "800",
  letterSpacing: "-0.015em",
  lineHeight: "1.125",
});

globalStyle("h1", {
  fontSize: "2rem",
});

globalStyle("h2", {
  fontSize: "1.5rem",
});

globalStyle("h3", {
  fontSize: "1.25rem",
});

globalStyle("h4", {
  fontSize: "1rem",
});

globalStyle("h5", {
  fontSize: "0.875rem",
});

globalStyle("h6", {
  fontSize: "0.75rem",
});

globalStyle("p, a, li", {
  fontSize: "1.125rem",
  "@media": {
    "screen and (min-width: 62.5em)": {
      fontSize: "1.25rem",
    },
  },
});

globalStyle("a", {
  color: vars.color.primary,
});

globalStyle("a:hover", {
  textDecoration: "none",
});

globalStyle("#content > p", {
  margin: "1rem 0",
});

globalStyle("#content > h2", {
  margin: "3rem 0 1rem",
});

globalStyle("#content > h3", {
  margin: "3rem 0 1rem",
});
