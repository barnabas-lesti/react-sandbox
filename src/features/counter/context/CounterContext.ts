import { createContext } from "react";

interface CounterContextValue {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterContextValue | undefined>(undefined);
