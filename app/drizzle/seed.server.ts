import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { v4 as uuidv4 } from "uuid";

import { posts } from "app/drizzle/schema.server";
import type { Post } from "~/lib/types";

const client = createClient({
  url: process.env.TURSO_DB_URL as string,
  authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
});

const db = drizzle(client);

async function seed() {
  const postData: Post[] = [
    {
      id: uuidv4(),
      slug: "hello-world",
      title: "Hello World!",
      description: "This is an awesome first post.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      coverImage: "https://source.unsplash.com/random/1248x653",
      coverImageAlt: "A random image from Unsplash",
      content: `## Hello World!`.trim(),
    },
  ];

  const storedPosts: any = await db
    .insert(posts)
    .values(postData)
    .returning()
    .all();

  console.log("Inserted ", storedPosts.length, " posts!");

  process.exit(0);
}

seed();
