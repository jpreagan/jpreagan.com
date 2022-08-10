import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const posts = style({
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(1, 1fr)",
  "@media": {
    "screen and (min-width: 48em)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

export const link = style({
  backgroundImage: "linear-gradient( to right, #6b21a8, #db2777 )",
  borderRadius: "6px",
  padding: "2rem 1rem",
  textDecoration: "none",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const header = style({
  margin: "0 0 1rem",
});

export const title = style({
  fontSize: "1.25rem",
  lineHeight: "1.25",
});

export const date = style({
  color: vars.color.text,
  fontSize: "0.9375rem",
  margin: "1rem 0",
  "@media": {
    "screen and (min-width: 48em)": {
      fontSize: "1rem",
    },
  },
});
