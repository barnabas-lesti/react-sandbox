import { Outlet, type RouteObject } from "react-router";

import { createLazyRoute } from "#core/router/createLazyRoute";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      createLazyRoute({ index: true, moduleLoader: () => import("#features/home/HomePage") }),
      createLazyRoute({
        path: "prop-drilling",
        moduleLoader: () => import("#features/prop-drilling/PropDrillingPage"),
      }),
    ],
  },
];
