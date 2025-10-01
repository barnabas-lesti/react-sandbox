import { create } from "zustand";

interface CounterState {
  value: number;
  decrement: () => void;
  increment: () => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  value: 0,
  decrement() {
    set({ value: get().value - 1 });
  },
  increment() {
    set({ value: get().value + 1 });
  },
}));
