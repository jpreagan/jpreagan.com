import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  margin: "2rem auto",
  maxWidth: "62.5em",
  padding: "0 1rem",
});

export const paragraph = style({
  paddingBottom: "2rem",
});

export const author = style({
  color: vars.color.text,
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
