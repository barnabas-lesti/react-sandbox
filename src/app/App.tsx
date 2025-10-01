import { createBrowserRouter, RouterProvider } from "react-router";

// import { CounterProvider } from "#features/counter/context/CounterProvider";
import { APP_ROUTES } from "./routes/config";

const router = createBrowserRouter(APP_ROUTES);

export function App() {
  return (
    <div className="p-4">
      {/* <CounterProvider> */}
      <RouterProvider router={router} />
      {/* </CounterProvider> */}
    </div>
  );
}
