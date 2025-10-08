import { useState } from "react";

import { CounterWithProps } from "./CounterWithProps";

export function CounterWithLocalState() {
  const [value, setValue] = useState(0);

  return (
    <CounterWithProps
      value={value}
      onDecrement={() => setValue(value - 1)}
      onIncrement={() => setValue(value + 1)}
    />
  );
}
