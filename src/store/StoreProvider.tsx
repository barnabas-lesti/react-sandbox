import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { STORE } from "./config";

type StoreProviderProps = PropsWithChildren;

export function StoreProvider(props: StoreProviderProps) {
  return <Provider store={STORE}>{props.children}</Provider>;
}
