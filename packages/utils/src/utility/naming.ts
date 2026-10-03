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