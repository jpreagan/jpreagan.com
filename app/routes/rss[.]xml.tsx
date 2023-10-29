import type { LoaderFunction } from "@remix-run/node";
import { getRSSFeedData } from "~/models/post.server";

function escapeCdata(s: string) {
  return s.replace(/\]\]>/g, "]]]]><![CDATA[>");
}

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getRSSFeedData();

  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.startsWith("192.168.") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const blogUrl = `${domain}/blog`;

  const rssString = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>James Reagan's Blog</title>
        <link>${blogUrl}</link>
        <description>The James Reagan Blog</description>
        <language>en-us</language>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title><![CDATA[${escapeCdata(post.title)}]]></title>
              <description><![CDATA[${escapeCdata(
                post.description,
              )}]]></description>
              <pubDate>${post.pubDate}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim(),
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rssString, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString)),
    },
  });
};
