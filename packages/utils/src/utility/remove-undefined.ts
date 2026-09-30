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
