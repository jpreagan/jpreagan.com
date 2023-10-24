import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const url = process.env.TURSO_DB_URL;
if (url === undefined) {
  throw new Error("TURSO_DB_URL is not defined");
}

const authToken = process.env.TURSO_DB_AUTH_TOKEN;
if (authToken === undefined) {
  throw new Error("TURSO_DB_AUTH_TOKEN is not defined");
}

export const client = createClient({ url, authToken });

export const db = drizzle(client);
