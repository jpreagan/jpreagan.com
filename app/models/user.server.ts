import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "~/db.server";
import { users } from "~/schema.server";

import type { User, Password } from "~/types";

export async function getUserById(id: User["id"]) {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
}

export async function verifyLogin(
  email: User["email"],
  password: Password["hash"],
) {
  const userWithPassword = await db.query.users.findFirst({
    where: eq(users.email, email),
    with: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash,
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
