import "dotenv/config";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";

import { db } from "../db.server";

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: "app/drizzle/migrations",
    });
    console.log("Tables migrated!");
    process.exit(0);
  } catch (error) {
    console.error("Error performing migration: ", error);
    process.exit(1);
  }
}

main();
