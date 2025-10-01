import { createBrowserRouter, RouterProvider } from "react-router";

import { APP_ROUTES } from "./routes/config";

const router = createBrowserRouter(APP_ROUTES);

export function App() {
  return <RouterProvider router={router} />;
}
