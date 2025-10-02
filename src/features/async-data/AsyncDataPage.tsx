import { useEffect } from "react";

import { Button } from "#core/ui/components/button/Button";
import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";

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
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Async Data</Typography>

      <Link to="/">Back Home</Link>

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
    </div>
  );
}
