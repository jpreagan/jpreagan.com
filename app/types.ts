import type { posts, users, passwords } from "~/schema.server";

export interface Artist {
  url: string;
  id: string;
  name: string;
}

export interface Track {
  artists: Artist[];
  album: string;
  albumUrl: string;
  id: string;
  image: string;
  trackName: string;
  trackUrl: string;
  duration: string;
}

export type Post = typeof posts.$inferSelect;

export type PostListing = Omit<
  Post,
  "id" | "createdAt" | "updatedAt" | "content"
> & {
  srcSet: string;
  timestamp: string;
  pubDate: string;
};

export type PostListings = PostListing[];

export type User = typeof users.$inferSelect;

export type Password = typeof passwords.$inferSelect;
