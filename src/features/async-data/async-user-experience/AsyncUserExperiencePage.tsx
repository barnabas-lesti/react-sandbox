import { useEffect } from "react";

import { Button } from "#core/ui/components/button/Button";
import { Typography } from "#core/ui/components/typography/Typography";
import { BasePageLayout } from "#core/ui/layouts/base-page-layout/BasePageLayout";

import { useAsyncUserExperienceStore } from "./useAsyncUserExperienceStore";

export default function AsyncUserExperiencePage() {
  const isLoading = useAsyncUserExperienceStore((store) => store.isLoading);
  const data = useAsyncUserExperienceStore((store) => store.data);
  const error = useAsyncUserExperienceStore((store) => store.error);
  const loadData = useAsyncUserExperienceStore((store) => store.loadData);

  useEffect(() => {
    loadData();
  }, []);

  function handleRefresh() {
    loadData({ force: true });
  }

  return (
    <BasePageLayout title="Async User Experience">
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
