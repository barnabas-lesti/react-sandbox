import { create } from "zustand";

import { debugDelay } from "#core/functions/debugDelay";

interface LoadDataOptions {
  force?: boolean;
}

interface AsyncUserExperienceState {
  isLoading: boolean;
  data: string[] | null;
  error: string | null;
  loadData: (options?: LoadDataOptions) => Promise<void>;
}

export const useAsyncUserExperienceStore = create<AsyncUserExperienceState>((set) => {
  let loadDataPromise: ReturnType<AsyncUserExperienceState["loadData"]> | null = null;

  return {
    isLoading: false,
    data: null,
    error: null,
    async loadData(options) {
      if (!options?.force && loadDataPromise) return;

      loadDataPromise = (async () => {
        set({ isLoading: true, error: null });
        try {
          // We simulate a little delay and define the loaded data.
          await debugDelay();
          // throw new Error();
          const data: AsyncUserExperienceState["data"] = ["Item 1", "Item 2", "Item 3"];
          set({ data });
        } catch (error) {
          loadDataPromise = null;
          set({ error: "Unknown error occurred, please try again." });
        } finally {
          set({ isLoading: false });
        }
      })();
    },
  };
});
