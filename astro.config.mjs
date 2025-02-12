// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSection from "./rehype-section.mjs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jpreagan.com",
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "vitesse-light",
      defaultColor: false,
    },
    rehypePlugins: [rehypeSection],
  },
});
