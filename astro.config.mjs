// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

import rehypeSection from "./rehype-section.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://jpreagan.com",
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "vitesse-light",
    },
    rehypePlugins: [rehypeSection],
  },
  output: "static",
  adapter: vercel(),
});
