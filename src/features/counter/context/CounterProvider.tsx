import { type PropsWithChildren, useCallback, useState } from "react";

import { CounterContext } from "./CounterContext";

type CounterProviderProps = PropsWithChildren;

export function CounterProvider(props: CounterProviderProps) {
  const [value, setValue] = useState(0);

  const increment = useCallback(() => setValue((currentValue) => currentValue + 1), []);
  const decrement = useCallback(() => setValue((currentValue) => currentValue - 1), []);

  return <CounterContext.Provider value={{ value, increment, decrement }}>{props.children}</CounterContext.Provider>;
}
