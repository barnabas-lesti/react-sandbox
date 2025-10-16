import { useEffect } from "react";

import { Button } from "#core/ui/components/button/Button";
import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

import { useAsyncDataStore } from "./useAsyncDataStore";

export default function AsyncDataPage() {
  const isLoading = useAsyncDataStore((store) => store.isLoading);
  const data = useAsyncDataStore((store) => store.data);
  const error = useAsyncDataStore((store) => store.error);
  const loadData = useAsyncDataStore((store) => store.loadData);

  useEffect(() => {
    loadData();
  }, []);

  function handleRefresh() {
    loadData({ force: true });
  }

  return (
    <BasePageLayout title="Async Data">
      <Button
        disabled={isLoading}
        onClick={handleRefresh}
      >
        Refresh
      </Button>

      {error && <Typography className="text-red-500">{error}</Typography>}

      {isLoading ? (
        <Typography>Loading data...</Typography>
      ) : data && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <Typography>No items to display.</Typography>
      )}
    </BasePageLayout>
  );
}
