import { isElement } from "hast-util-is-element";

/**
 * @type {import('unified').Plugin<[], import('hast').Root>}
 */
const rehypeSection = function (options = {}) {
  return function transformer(tree) {
    const sections = [];
    let currentSection = null;

    const firstH2Index = tree.children.findIndex((node) =>
      isElement(node, "h2"),
    );

    const hasLeadingContent = firstH2Index > 0 || firstH2Index === -1;

    if (hasLeadingContent) {
      currentSection = {
        type: "element",
        tagName: "section",
        properties: {},
        children: [],
      };
      sections.push(currentSection);
    }

    tree.children.forEach((node) => {
      if (isElement(node, "h2")) {
        currentSection = {
          type: "element",
          tagName: "section",
          properties: {},
          children: [],
        };
        sections.push(currentSection);
      }

      if (currentSection) {
        currentSection.children.push(node);
      }
    });

    tree.children = sections;
  };
};

export default rehypeSection;
