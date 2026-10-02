import { ROLE_ENUM } from "@/jwt";
import { uid } from "uid/secure";
import z from "zod";

/**
 * Generates a cryptographically secure unique identifier.
 *
 * @param options - Optional configuration for the generated ID.
 * @param options.length - The length of the generated ID. Defaults to `10`.
 * @returns A cryptographically secure unique identifier.
 *
 * @example
 * ```ts
 * const id = generateId();
 * // "a8Kx92LmQp"
 * ```
 *
 * @example
 * ```ts
 * const id = generateId({ length: 16 });
 * // "x7Pq2Lm9Ks4Rt8Wz"
 * ```
 */

export function id(options?: { length: number }) {
  const length = options?.length ?? 10;

  return uid(length).toUpperCase();
}

/**
 * Generates a cryptographically secure unique identifier.
 *
 * @param options - Optional configuration for the generated ID.
 * @param options.length - The length of the generated ID. Defaults to `10`.
 * @returns A cryptographically secure unique identifier.
 *
 * @example
 * ```ts
 * const id = generateId();
 * // "a8Kx92LmQp"
 * ```
 *
 * @example
 * ```ts
 * const id = generateId({ length: 16 });
 * // "x7Pq2Lm9Ks4Rt8Wz"
 * ```
 */

export function platformId(options: {
  length?: number;
  employeeType: z.infer<typeof ROLE_ENUM>;
}) {
  const length = options.length ?? 6;

  let employeeTypePrefix = "";

  switch (options.employeeType) {
    case "ADMIN":
      employeeTypePrefix = "AD";
      break;
    case "AGENT":
      employeeTypePrefix = "AG";
      break;
    case "CUSTOMER":
      employeeTypePrefix = "CU";
      break;

    default:
      employeeTypePrefix = "EM";
      break;
  }

  return `SR_${employeeTypePrefix}_${uid(length).toUpperCase()}`;
}
