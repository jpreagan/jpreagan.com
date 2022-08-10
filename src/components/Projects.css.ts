import { style } from "@vanilla-extract/css";

export const projects = style({
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(1, 1fr)",
  "@media": {
    "screen and (min-width: 48em)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
