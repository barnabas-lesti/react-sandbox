import { isDefined } from "./isDefined";

export async function debugDelay(delayInMs?: number): Promise<void> {
  if (!isDefined(import.meta.env.PUBLIC_DEBUG_DELAY_IN_MS)) return;
  return new Promise((resolve) => setTimeout(resolve, delayInMs ?? Number(import.meta.env.PUBLIC_DEBUG_DELAY_IN_MS)));
}
