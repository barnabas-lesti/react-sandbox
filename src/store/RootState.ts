import type { STORE } from "./config";

export type RootState = ReturnType<typeof STORE.getState>;
