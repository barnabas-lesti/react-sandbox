import { createBrowserRouter, RouterProvider } from "react-router";

import { StoreProvider } from "#store/StoreProvider";

// import { CounterProvider } from "#features/counter/context/CounterProvider";
import { APP_ROUTES } from "./routes/config";

const router = createBrowserRouter(APP_ROUTES);

export function App() {
  return (
    <StoreProvider>
      {/* <CounterProvider> */}
      <div className="p-4">
        <RouterProvider router={router} />
      </div>
      {/* </CounterProvider> */}
    </StoreProvider>
  );
}
