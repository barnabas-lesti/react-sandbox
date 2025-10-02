import { useDispatch } from "react-redux";

import type { STORE } from "./config";

type AppDispatch = typeof STORE.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
