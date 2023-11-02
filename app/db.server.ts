import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import invariant from "tiny-invariant";

import * as schema from "~/schema.server";

invariant(process.env.DATABASE_URL, "DATABASE_URL must be set");

const connection = connect({ url: process.env.DATABASE_URL });

export const db = drizzle(connection, { schema });
