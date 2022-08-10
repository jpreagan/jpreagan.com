import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const link = style({
  color: vars.color.text,
  border: `1px solid ${vars.color.muted}`,
  borderRadius: "6px",
  padding: "1rem",
  textDecoration: "none",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const name = style({
  color: vars.color.primary,
});

export const description = style({
  margin: "0.5rem 0",
});
