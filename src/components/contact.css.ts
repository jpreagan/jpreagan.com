import { style } from "@vanilla-extract/css";

export const form = style({
  maxWidth: "40em",
});

export const input = style({
  border: "0",
  borderRadius: "3px",
  display: "block",
  margin: "2px 0 1rem",
  padding: "0.5rem",
  width: "100%",
});

export const textarea = style({
  border: "0",
  borderRadius: "3px",
  display: "block",
  margin: "2px 0 1rem",
  padding: "0.5rem",
  width: "100%",
});

export const button = style({
  backgroundColor: "#db2777",
  backgroundImage: "linear-gradient( to right, #5b21b6, #db2777 )",
  border: "0",
  borderRadius: "3px",
  color: "white",
  padding: "0.5rem 1rem",
});
