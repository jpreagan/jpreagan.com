import { mysqlTable, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const posts = mysqlTable("posts", {
  id: varchar("id", { length: 36 }).primaryKey(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  coverImage: text("coverImage").notNull(),
  coverImageAlt: text("coverImageAlt").notNull(),
  content: text("content").notNull(),
});
