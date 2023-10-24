import { eq, desc } from "drizzle-orm";

import { db } from "~/db.server";
import { posts } from "~/drizzle/schema.server";
import { getImageUrls, compileMdx } from "~/lib/utils.server";

export async function getPostListings(limit: number = 10) {
  const postListings = await db
    .select({
      title: posts.title,
      description: posts.description,
      pubDate: posts.pubDate,
      slug: posts.slug,
      coverImage: posts.coverImage,
      coverImageAlt: posts.coverImageAlt,
    })
    .from(posts)
    .orderBy(desc(posts.pubDate))
    .limit(limit);

  return postListings.map((post) => {
    const srcSet = getImageUrls(post.coverImage, [300, 600, 900, 1248, 2496]);
    return { ...post, srcSet };
  });
}

export async function getPost(slug: string) {
  const post = await db.select().from(posts).where(eq(posts.slug, slug)).get();
  if (!post) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Post not found",
    });
  }

  const { title, description, pubDate, coverImage, coverImageAlt, content } =
    post;

  const srcSet = getImageUrls(coverImage, [300, 600, 900, 1248, 2496]);

  if (!content) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Post not found",
    });
  }

  const code = await compileMdx(content);

  return {
    title,
    description,
    pubDate,
    coverImage,
    coverImageAlt,
    srcSet,
    code,
  };
}
