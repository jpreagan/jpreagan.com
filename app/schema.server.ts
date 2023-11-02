import { mysqlTable, varchar, text, timestamp } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

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

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  email: varchar("email", { length: 254 }).unique().notNull(),
});

export const passwords = mysqlTable("passwords", {
  hash: text("hash").notNull(),
  userId: varchar("user_id", { length: 36 }).primaryKey(),
});

export const usersRelations = relations(users, ({ one }) => ({
  password: one(passwords, {
    fields: [users.id],
    references: [passwords.userId],
  }),
}));
