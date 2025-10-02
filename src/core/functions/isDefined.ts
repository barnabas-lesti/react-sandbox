export function isDefined<T>(subject: T): subject is NonNullable<T> {
  return subject !== undefined && subject !== null;
}
