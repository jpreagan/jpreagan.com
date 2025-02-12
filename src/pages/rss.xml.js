import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { AUTHOR_NAME, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: AUTHOR_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
