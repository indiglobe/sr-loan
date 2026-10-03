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
