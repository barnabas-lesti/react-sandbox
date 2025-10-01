import { createBrowserRouter, RouterProvider } from "react-router";

import { APP_ROUTES } from "./routes/config";

const router = createBrowserRouter(APP_ROUTES);

export function App() {
  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
}
