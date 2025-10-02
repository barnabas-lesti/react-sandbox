import { type TypedUseSelectorHook, useSelector } from "react-redux";

import type { STORE } from "./config";

type RootState = ReturnType<typeof STORE.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
