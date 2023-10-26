import { eq, desc } from "drizzle-orm";

import { db } from "~/db.server";
import { posts } from "~/drizzle/schema.server";
import { getImageUrls, compileMdx } from "~/lib/utils.server";
import type { Post } from "~/lib/types";

export async function getPostListings(limit: number = 10) {
  const postListings = await db
    .select({
      title: posts.title,
      description: posts.description,
      updatedAt: posts.updatedAt,
      slug: posts.slug,
      coverImage: posts.coverImage,
      coverImageAlt: posts.coverImageAlt,
    })
    .from(posts)
    .orderBy(desc(posts.updatedAt))
    .limit(limit);

  return postListings.map((post) => {
    const srcSet = getImageUrls(post.coverImage, [300, 600, 900, 1248, 2496]);

    return {
      ...post,
      srcSet,
      timestamp: post.updatedAt,
      pubDate: new Date(post.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Pacific/Honolulu",
      }),
    };
  });
}

export async function getPost(slug: string) {
  const result: Post[] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);
  const post = result[0];

  if (!post) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Post not found",
    });
  }

  const { title, description, updatedAt, coverImage, coverImageAlt, content } =
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
    timestamp: updatedAt,
    pubDate: new Date(updatedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Pacific/Honolulu",
    }),
    coverImage,
    coverImageAlt,
    srcSet,
    code,
  };
}
