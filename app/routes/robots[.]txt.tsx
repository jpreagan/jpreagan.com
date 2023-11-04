import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.startsWith("192.168.") ? "http" : "https";
  const domain = `${protocol}://${host}`;

  const robots = [
    "User-agent: *",
    "Disallow: /login",
    `Sitemap: ${domain}/sitemap.xml`,
  ].join("\n");

  return new Response(robots, {
    headers: {
      "Content-Type": "application/text",
    },
  });
};
