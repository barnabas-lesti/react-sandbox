import { cloneDeep, merge } from "lodash-es";

export function mergeDeep<T>(original: T, updates: Partial<T>) {
  return merge(cloneDeep(original), updates);
}
