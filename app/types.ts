import type { posts, users, passwords } from "~/schema.server";

export type Post = typeof posts.$inferSelect;

export type PostListing = Omit<
  Post,
  "id" | "createdAt" | "updatedAt" | "content"
> & {
  srcSet: string;
  timestamp: string;
  pubDate: string;
};

export type User = typeof users.$inferSelect;

export type Password = typeof passwords.$inferSelect;
