import { env } from "@repo/env/server";
import bcrypt from "bcryptjs";
import { tryCatch } from "@/try-catch";

const SALT_ROUNDS = env.SALT_ROUND;

/**
 * Hashes a plain-text password using bcrypt.
 *
 * @param {string} rawPassword - The plain-text password to hash.
 * @returns {Promise<string>} A promise that resolves to the bcrypt-hashed password.
 * @throws {Error} If the password is empty, not a string, or hashing fails.
 */
export async function hashPassword(rawPassword: string): Promise<string> {
  if (!rawPassword || typeof rawPassword !== "string") {
    throw new Error("Password must be a non-empty string");
  }

  const [hashingError, hashingValue] = await tryCatch(
    bcrypt.hash(rawPassword, SALT_ROUNDS),
  );

  if (hashingError) {
    console.log(`Error in hashingError in hashPassword`);
    throw new Error(`Error in hashingError in hashPassword`);
  }

  return hashingValue;
}

/**
 * Validates a plain-text password against a bcrypt hash.
 *
 * @param {string} rawPassword - The plain-text password to validate.
 * @param {string} hashedPassword - The bcrypt hash to compare against.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the password
 * matches the hash, otherwise `false`.
 *
 * @remarks
 * Returns `false` when either argument is not a string. If bcrypt comparison
 * fails, the error is logged and the resulting value is returned.
 */
export async function validatePassword(
  rawPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  if (typeof rawPassword !== "string" || typeof hashedPassword !== "string") {
    return false;
  }

  const [comparingError, comparingValue] = await tryCatch(() =>
    bcrypt.compare(rawPassword, hashedPassword),
  );

  if (comparingError) {
    console.log(`Error in comparingError in validatePassword`);
    return false;
  }

  return comparingValue;
}
