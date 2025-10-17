import { useEffect } from "react";
import { create } from "zustand";

import { debugDelay } from "#core/functions/debugDelay";
import { mergeDeep } from "#core/functions/mergeDeep";
import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

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

const useBigObjectStore = create<BigObjectState>((set, get) => {
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

export default function BigObjectPage() {
  const isBigObjectLoading = useBigObjectStore((state) => state.isBigObjectLoading);
  const loadBigObject = useBigObjectStore((state) => state.loadBigObject);

  console.debug("BigObjectPage()");

  useEffect(() => {
    loadBigObject();
  }, []);

  return (
    <BasePageLayout title="Big Object">
      {isBigObjectLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <BigObjectInputs />
          <BigObjectDisplay />
        </>
      )}
    </BasePageLayout>
  );
}

function BigObjectInputs() {
  const level1Field = useBigObjectStore((state) => state.bigObject?.field);
  const level2Field = useBigObjectStore((state) => state.bigObject?.object?.field);
  const level3Field = useBigObjectStore((state) => state.bigObject?.object?.subObject?.field);
  const setBigObject = useBigObjectStore((state) => state.setBigObject);

  console.debug("BigObjectInputs()");

  return (
    <>
      <input
        type="text"
        defaultValue={level1Field}
        onChange={(event) => setBigObject({ field: event.target.value })}
      />
      <input
        type="text"
        defaultValue={level2Field}
        onChange={(event) => setBigObject({ object: { field: event.target.value } })}
      />
      <input
        type="text"
        defaultValue={level3Field}
        onChange={(event) => setBigObject({ object: { subObject: { field: event.target.value } } })}
      />
    </>
  );
}

function BigObjectDisplay() {
  const isBigObjectLoading = useBigObjectStore((state) => state.isBigObjectLoading);
  const level1Field = useBigObjectStore((state) => state.bigObject?.field);
  // const level2Field = useBigObjectStore((state) => state.bigObject?.object?.field);
  // const level3Field = useBigObjectStore((state) => state.bigObject?.object?.subObject?.field);

  console.debug("BigObjectDisplay()");

  return <pre>{JSON.stringify({ isBigObjectLoading, level1Field }, null, 2)}</pre>;
}
