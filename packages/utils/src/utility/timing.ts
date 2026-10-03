
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

