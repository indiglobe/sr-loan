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
 * Generates a unique employee ID based on the employee type.
 *
 * The generated ID follows the format:
 * `SR_<EMPLOYEE_TYPE_PREFIX>_<UNIQUE_ID>`
 *
 * Employee type prefixes:
 * - `ADMIN` → `AD`
 * - `AGENT` → `AG`
 * - `CUSTOMER` → `CU`
 * - Any other value → `EM`
 *
 * @param options - Configuration options for the generated employee ID.
 * @param options.length - The length of the unique ID portion. Defaults to `6`.
 * @param options.employeeType - The employee type used to determine the ID prefix.
 * @returns A unique employee ID containing the employee type prefix and a generated unique identifier.
 *
 * @example
 * ```ts
 * const id = platformEmployeeId({ employeeType: "ADMIN" });
 * // "SR_AD_A8KX92"
 * ```
 *
 * @example
 * ```ts
 * const id = platformEmployeeId({
 *   employeeType: "AGENT",
 *   length: 10,
 * });
 * // "SR_AG_X7PQ2LM9KS"
 * ```
 */

export function platformEmployeeId(options: {
  employeeType: z.infer<typeof ROLE_ENUM>;
}) {
  const length = 6;

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
