import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const text = style({
  marginBottom: "1rem",
});

export const link = style({
  color: "inherit",
  fontSize: "1rem",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const image = style({
  minWidth: "40px",
});

export const grid = style({
  alignItems: "center",
  borderRadius: "6px",
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "2rem auto",
  lineHeight: "1.6",
  maxWidth: "62.5em",
  ":hover": {
    backgroundColor: vars.color.muted,
  },
  "@media": {
    "screen and (min-width: 40em)": {
      gridTemplateColumns: "2rem 6fr 4fr 1fr",
    },
  },
  fontSize: "1rem",
});

export const index = style({
  textAlign: "right",
});

export const track = style({
  alignItems: "center",
  display: "flex",
  margin: "2px 0",
});

export const container = style({
  marginLeft: "1rem",
});

export const trackTitle = style({
  color: vars.color.heading,
  display: "-webkit-box",
  whiteSpace: "unset",
  wordBreak: "break-all",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
});

export const artist = style({
  fontSize: "87.5%",
  display: "-webkit-box",
  whiteSpace: "unset",
  wordBreak: "break-all",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
});

export const album = style({
  display: "none",
  "@media": {
    "screen and (min-width: 40em)": {
      display: "block",
    },
  },
});

export const duration = style({
  display: "none",
  "@media": {
    "screen and (min-width: 40em)": {
      display: "block",
    },
  },
});
