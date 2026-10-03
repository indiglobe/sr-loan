/**
 * Recursively removes properties with `undefined` values from an object.
 *
 * Arrays are traversed recursively, and nested objects are cleaned in the
 * same manner. Primitive values, `null`, and other non-object values are
 * returned unchanged.
 *
 * @template T - The type of the input value.
 * @param {T} obj - The value to clean.
 * @returns {T} A new value with all `undefined` object properties removed
 * recursively.
 *
 * @example
 * ```ts
 * removeUndefinedFromObject({
 *   name: "John",
 *   age: undefined,
 *   address: {
 *     city: "Kolkata",
 *     zip: undefined,
 *   },
 * });
 * // {
 * //   name: "John",
 * //   address: {
 * //     city: "Kolkata",
 * //   },
 * // }
 * ```
 *
 * @example
 * ```ts
 * removeUndefinedFromObject([
 *   { name: "John", age: undefined },
 *   { name: "Jane", age: 25 },
 * ]);
 * // [
 * //   { name: "John" },
 * //   { name: "Jane", age: 25 },
 * // ]
 * ```
 */
export function removeUndefinedFromObject<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(removeUndefinedFromObject) as T;
  }

  if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, removeUndefinedFromObject(value)]),
    ) as T;
  }

  return obj;
}
