import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

const url = process.env.DATABASE_URL;
if (url === undefined) {
  throw new Error("DATABASE_URL is not defined");
}

export default {
  schema: "./app/schema.server.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: url,
  },
} satisfies Config;
