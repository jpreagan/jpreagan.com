import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import { sql } from "drizzle-orm";

import { db } from "~/db.server";
import { posts } from "~/drizzle/schema.server";
import type { Post } from "~/lib/types";

async function seed() {
  const postData: Post[] = [
    {
      id: uuidv4(),
      slug: "hello-world",
      title: "Hello World!",
      description: "This is an awesome first post.",
      createdAt: new Date(),
      updatedAt: new Date(),
      coverImage: "https://source.unsplash.com/random/1248x653",
      coverImageAlt: "A random image from Unsplash",
      content: `## Hello World!`.trim(),
    },
  ];

  await db
    .insert(posts)
    .values(postData)
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });

  console.log("Inserted or updated", postData.length, "posts!");

  process.exit(0);
}

seed();
