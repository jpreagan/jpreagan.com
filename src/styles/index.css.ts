import { style } from "@vanilla-extract/css";

export const header = style({
  border: "0",
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  wordWrap: "normal",
});

export const section = style({
  margin: "4rem auto",
  padding: "0 1rem",
  maxWidth: "62.5em",
  "@media": {
    "screen and (min-width: 48em)": {
      margin: "10rem auto",
    },
  },
});

export const heading = style({
  fontSize: "2rem",
  margin: "0 0 1rem",
});
