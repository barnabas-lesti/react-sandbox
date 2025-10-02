import { Outlet, type RouteObject } from "react-router";

import { createLazyRoute } from "#core/router/createLazyRoute";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      createLazyRoute({ index: true, moduleLoader: () => import("#features/home/HomePage") }),
      createLazyRoute({
        path: "counter/context",
        moduleLoader: () => import("#features/state-management/context/CounterWithContextPage"),
      }),
      createLazyRoute({
        path: "counter/prop-drilling",
        moduleLoader: () => import("#features/state-management/props/CounterWithPropDrillingPage"),
      }),
      createLazyRoute({
        path: "counter/redux",
        moduleLoader: () => import("#features/state-management/redux/CounterWithReduxPage"),
      }),
      createLazyRoute({
        path: "counter/zustand",
        moduleLoader: () => import("#features/state-management/zustand/CounterWithZustandPage"),
      }),
    ],
  },
];
