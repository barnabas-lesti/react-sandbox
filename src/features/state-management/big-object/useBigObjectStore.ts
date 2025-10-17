import { create } from "zustand";

import { debugDelay } from "#core/functions/debugDelay";
import { mergeDeep } from "#core/functions/mergeDeep";

interface BigObject {
  field?: string;
  array?: string[];
  object?: {
    field?: string;
    array?: string[];
    subObject?: {
      field?: string;
      array?: string[];
    };
  };
}

interface BigObjectState {
  isBigObjectLoading?: boolean;
  bigObject?: BigObject;
  setBigObject: (updates: Partial<BigObject>) => void;
  loadBigObject: () => Promise<void>;
}

export const useBigObjectStore = create<BigObjectState>((set, get) => {
  return {
    setBigObject: (updates) => set({ bigObject: mergeDeep(get().bigObject, updates) }),
    async loadBigObject() {
      set({ isBigObjectLoading: true });
      await debugDelay();
      const response: { bigObject: BigObject } = { bigObject: {} };
      set({
        isBigObjectLoading: false,
        bigObject: response.bigObject,
      });
    },
  };
});
