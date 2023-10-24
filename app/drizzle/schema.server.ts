import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  slug: text("slug").unique().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  pubDate: text("pubDate").notNull(),
  coverImage: text("coverImage").notNull(),
  coverImageAlt: text("coverImageAlt").notNull(),
  content: text("content").notNull(),
});
