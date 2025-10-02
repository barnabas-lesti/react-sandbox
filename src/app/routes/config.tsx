import { Outlet, type RouteObject } from "react-router";

import { createLazyRoute } from "#core/router/createLazyRoute";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      createLazyRoute({ index: true, moduleLoader: () => import("#features/home/HomePage") }),
      createLazyRoute({
        path: "async-data",
        moduleLoader: () => import("#features/async-data/AsyncDataPage"),
      }),
      createLazyRoute({
        path: "state-management/context",
        moduleLoader: () => import("#features/state-management/context/CounterWithContextPage"),
      }),
      createLazyRoute({
        path: "state-management/prop-drilling",
        moduleLoader: () => import("#features/state-management/props/CounterWithPropDrillingPage"),
      }),
      createLazyRoute({
        path: "state-management/redux",
        moduleLoader: () => import("#features/state-management/redux/CounterWithReduxPage"),
      }),
      createLazyRoute({
        path: "state-management/zustand",
        moduleLoader: () => import("#features/state-management/zustand/CounterWithZustandPage"),
      }),
    ],
  },
];
