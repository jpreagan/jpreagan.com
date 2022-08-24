import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const heading = style({
  backgroundImage:
    "linear-gradient(to right, rgb(107, 33, 168), rgb(219, 39, 119), rgb(251, 146, 60))",
  margin: "0 auto",
  maxWidth: "62.5em",
  padding: "4rem 1rem",
  "@media": {
    "screen and (min-width: 62.5em)": {
      borderRadius: "6px",
      padding: "8rem 1rem",
    },
  },
});

export const container = style({
  maxWidth: "52.5em",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 40em)": {
      maxWidth: "38em",
      margin: "0 auto",
    },
  },
});

export const title = style({
  "@media": {
    "screen and (min-width: 62.5em)": {
      fontSize: "4rem",
    },
  },
});

export const date = style({
  fontFamily: vars.font.heading,
});

export const description = style({
  margin: "4rem auto",
  maxWidth: "43.75em",
  padding: "0 1rem",
});

export const markdown = style({
  margin: "4rem auto",
  maxWidth: "43.75em",
  padding: "0 1rem",
});
