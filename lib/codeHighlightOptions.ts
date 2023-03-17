import fs from "fs";
import { type Options } from "rehype-pretty-code";

export const codeHighlightOptions: Partial<Options> = {
  theme: JSON.parse(
    fs.readFileSync("./lib/themes/tokyo-night-color-theme.json", "utf-8")
  ),
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};
