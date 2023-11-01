import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

import { getPostSlugs } from "~/models/post.server";
import { pages } from "~/consts";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const posts = await getPostSlugs();

  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.startsWith("192.168.") ? "http" : "https";
  const domain = `${protocol}://${host}`;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pages
        .map((page) =>
          `
            <url>
              <loc>${domain}${page.href}</loc>
              <priority>0.6</priority>
            </url>
          `.trim(),
        )
        .join("")}
      ${posts
        .map((post) =>
          `
            <url>
              <loc>${domain}/blog/${post.slug}</loc>
              <priority>0.7</priority>
            </url>
          `.trim(),
        )
        .join("")}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(sitemap)),
    },
  });
};
