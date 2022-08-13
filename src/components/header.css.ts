import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  margin: "2rem auto",
  maxWidth: "62.5em",
  padding: "0 1rem",
  "@media": {
    "screen and (min-width: 25em)": {
      alignItems: "center",
      display: "flex",
    },
  },
});

export const title = style({
  color: vars.color.heading,
  fontFamily: vars.font.heading,
  fontSize: "1.25rem",
  fontWeight: vars.fontWeight.heading,
  letterSpacing: "-0.015em",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
  "@media": {
    "screen and (min-width: 62.5em)": {
      fontSize: "1.5rem",
    },
  },
});

export const nav = style({
  marginLeft: "auto",
});

export const list = style({
  display: "flex",
  gap: "0.5rem",
  listStyle: "none",
  margin: "1rem 0",
  padding: "0",
  "@media": {
    "screen and (min-width: 25em)": {
      margin: "0",
    },
  },
});

export const link = style({
  color: vars.color.text,
  letterSpacing: "-0.015em",
  textDecoration: "none",
  ":hover": {
    borderBottom: `1px solid ${vars.color.primary}`,
  },
});

export const activeLink = style({
  borderBottom: `1px solid ${vars.color.primary}`,
});
