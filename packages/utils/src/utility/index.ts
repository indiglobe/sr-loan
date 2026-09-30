/**
 * Extracts the username portion from an email address.
 *
 * The username is everything before the first `@` character.
 *
 * @param email - The email address to extract the username from.
 * @returns The portion of the email address before the `@` character.
 *
 * @example
 * generateUserNameFromEmail("john.doe@example.com");
 * // "john.doe"
 */
export function generateUserNameFromEmail(email: string) {
  return email.split("@")[0];
}

/**
 * Splits a full name into first and last name components.
 *
 * Supports names containing exactly two parts as well as names
 * prefixed with a supported salutation (`Mr.`, `Mrs.`, `Ms.`, `Dr.`, or `MD.`).
 *
 * @param fullName - The full name to format.
 * @returns An object containing the extracted `firstName` and `lastName`.
 * @throws {string} The original name when it cannot be formatted using
 * the supported name patterns.
 *
 * @example
 * formatName("John Doe");
 * // { firstName: "John", lastName: "Doe" }
 *
 * @example
 * formatName("Dr. John Doe");
 * // { firstName: "John", lastName: "Doe" }
 */
export function formatName(fullName: string) {
  const salutations = ["Mr.", "Mrs.", "Ms.", "Dr.", "MD."];

  const splitedName = fullName.split(" ");

  if (splitedName.length === 2) {
    return {
      firstName: splitedName[0],
      lastName: splitedName[splitedName.length - 1],
    };
  }

  for (const s of salutations) {
    if (fullName.startsWith(s)) {
      return {
        firstName: splitedName[1],
        lastName: splitedName[splitedName.length - 1],
      };
    }
  }

  throw fullName;
}

/**
 * Formats a duration in seconds as either a human-readable duration
 * or an `HH:mm:ss` timestamp.
 *
 * By default, the duration is formatted as `HH:mm:ss`, where each
 * component is padded with a leading zero when necessary. When
 * `options.dhms` is enabled, the duration is formatted using
 * days, hours, minutes, and seconds.
 *
 * @param totalSeconds - The total duration in seconds.
 * @param options - Formatting options.
 * @param options.dhms - Whether to use a human-readable days/hours/minutes/seconds format.
 * @returns The formatted duration string.
 *
 * @example
 * formatSeconds(3661);
 * // "01:01:01"
 *
 * @example
 * formatSeconds(90061, { dhms: true });
 * // "1d 1h 1m 1s"
 */
export function formatSeconds(
  totalSeconds: number,
  options?: { dhms: boolean },
) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  if (options?.dhms) {
    return `${days > 0 && `${days}d`} ${hours > 0 && `${hours}h`} ${minutes > 0 && `${minutes}m `} ${seconds > 0 && `${seconds}s`}  `;
  }

  // Default: hh:mm:ss with leading zeros
  const totalHours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = Math.floor(totalSeconds % 60);

  return [totalHours, mins, secs]
    .map((val) => val.toString().padStart(2, "0"))
    .join(":");
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Calculates the remaining time between the current time and a target date.
 *
 * If the target date has already passed, all returned time components
 * are set to zero.
 *
 * @param targetDate - The date and time to count down to.
 * @returns An object containing the remaining days, hours, minutes, and seconds.
 *
 * @example
 * calculateTimeLeft(new Date("2026-12-31T23:59:59"));
 * // { days: ..., hours: ..., minutes: ..., seconds: ... }
 *
 * @example
 * calculateTimeLeft(new Date(Date.now() - 1000));
 * // { days: 0, hours: 0, minutes: 0, seconds: 0 }
 */
export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const diff = targetDate.getTime() - new Date().getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

/**
 * Formats a date using the Indian English locale.
 *
 * The resulting string contains the numeric day followed by the
 * full month name. The year is not included.
 *
 * @param date - The date to format.
 * @returns The formatted date string.
 *
 * @example
 * formatDate(new Date("2026-08-15"));
 * // "15 August"
 */
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
  }).format(date);
}

/**
 * Returns a human-readable relative date description.
 *
 * The result is expressed relative to either the current date or
 * the provided reference date. Supported special values include
 * `yesterday`, `Today`, and `Tomorrow`; other dates are expressed
 * as a number of days before or after the reference date.
 *
 * @param calculatingDate - The date to describe relative to the reference date.
 * @param referenceDate - Optional date to use as the reference point.
 * Defaults to the current date and time.
 * @returns A human-readable relative date string.
 *
 * @example
 * getRelativeTime(new Date("2026-08-15"));
 * // "Today"
 *
 * @example
 * getRelativeTime(new Date("2026-08-16"), new Date("2026-08-15"));
 * // "Tomorrow"
 *
 * @example
 * getRelativeTime(new Date("2026-08-20"), new Date("2026-08-15"));
 * // "in 5 days"
 */
export function getRelativeTime(calculatingDate: Date, referenceDate?: Date) {
  const now = referenceDate ? new Date(calculatingDate) : new Date(Date.now());
  const diff = Math.ceil(
    (calculatingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diff <= -2) return `${Math.abs(diff)} days ago`;
  if (diff === -1) return "yesterday";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `in ${diff} days`;
}

/**
 * Rounds a number down to the nearest value ending in `9`.
 *
 * If the number already ends in `9`, it is returned unchanged.
 * Otherwise, the function returns the largest number less than or
 * equal to the input whose last digit is `9`.
 *
 * @param n - The number to round.
 * @returns The nearest lower number ending in `9`.
 *
 * @example
 * roundToClosest9(12);
 * // 19
 *
 * @example
 * roundToClosest9(29);
 * // 29
 *
 * @example
 * roundToClosest9(47);
 * // 49
 */
export function roundToClosest9(n: number): number {
  return n % 10 === 9 ? n : Math.floor(n / 10) * 10 + 9;
}

import { env } from "@repo/env/server";
import bcrypt from "bcryptjs";
import { tryCatch } from "@/try-catch";

const SALT_ROUNDS = env.SALT_ROUND;

/**
 * Hash a plain-text password.
 */
export async function hashPassword(rawPassword: string) {
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
 * Validate a plain-text password against a bcrypt hash.
 */
export async function validatePassword(
  rawPassword: string,
  hashedPassword: string,
) {
  if (typeof rawPassword !== "string" || typeof hashedPassword !== "string") {
    return false;
  }

  const [comparingError, comparingValue] = tryCatch(() =>
    bcrypt.compare(rawPassword, hashedPassword),
  );

  if (comparingError) {
    console.log(`Error in comparingError in validatePassword`);
  }

  return comparingValue;
}

export function generateAgentId() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `SA_SA${randomNumber}`;
}
