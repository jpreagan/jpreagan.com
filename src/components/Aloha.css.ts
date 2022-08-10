import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  "@media": {
    "screen and (min-width: 48em)": {
      display: "flex",
      gap: "1rem",
      margin: "10rem auto",
    },
  },
});

export const title = style({
  fontSize: "2.4rem",
  margin: "2rem 0",
  "@media": {
    "screen and (min-width: 25em)": {
      fontSize: "3rem",
    },
    "screen and (min-width: 48em)": {
      fontSize: "3.6rem",
      lineHeight: "1",
    },
    "screen and (min-width: 62em)": {
      fontSize: "5.5rem",
    },
  },
});

export const author = style({
  color: "transparent",
  backgroundClip: "text",
  backgroundImage: "linear-gradient( to right, #67e8f9, #6366f1, #e879f9 )",
  fontFamily: vars.font.heading,
  letterSpacing: "-0.015em",
});

export const text = style({
  margin: "1rem 0",
});

export const social = style({
  display: "flex",
  gap: "0.125rem",
  margin: "2rem 0",
});

export const socialLink = style({
  color: "inherit",
  ":hover": {
    color: vars.color.heading,
  },
});

export const image = style({
  "@media": {
    "screen and (min-width: 48em)": {
      marginLeft: "auto",
    },
  },
});
