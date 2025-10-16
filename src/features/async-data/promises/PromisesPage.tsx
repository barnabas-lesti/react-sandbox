import { useEffect, useState } from "react";

import { debugDelay } from "#core/functions/debugDelay";
import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

export default function PromisesPage() {
  // const data1 = await fetchData1();
  const [data1, setData1] = useState<Awaited<ReturnType<typeof fetchData1>>>([]);
  const [data2, setData2] = useState<Awaited<ReturnType<typeof fetchData2>>>([]);

  useEffect(() => {
    fetchData1().then((data) => setData1(data));
    fetchData2().then((data) => setData2(data));

    // (async () => {
    //   setData1(await fetchData1());
    //   setData2(await fetchData2());
    //   // Promise.all();
    // })();

    const mappedArray = createDummyArray().map(() => {
      // const mappedArray = createDummyArray().map(async () => {
      return Math.random();
    });
    console.debug(mappedArray);
    // Promise.all(mappedArray).then((entry) => console.debug(entry));
    console.debug("Last statement?");
  }, []);

  return (
    <BasePageLayout title="Promises">
      <Typography>Data1: {data1.join(", ")}</Typography>
      <Typography>Data2: {data2}</Typography>
    </BasePageLayout>
  );
}

// function fetchData1(): Promise<number[]> {
function fetchData1() {
  // return new Promise((resolve) => {
  return new Promise<number[]>((resolve) => {
    // resolve([1, 2, 3]);
    setTimeout(() => resolve([1, 2, 3]), 1000);
  });
}

async function fetchData2() {
  // function fetchData2() {
  return (async () => {
    await debugDelay();
    return ["a", "b", "c"];
  })();
  // return async () => {
  //   return ["a", "b", "c"];
  // };
}

function createDummyArray() {
  return Array(10).fill(undefined);
}
