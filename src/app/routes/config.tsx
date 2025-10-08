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
      {
        path: "state-management",
        children: [
          createLazyRoute({
            path: "context",
            moduleLoader: () => import("#features/state-management/context/CounterWithContextPage"),
          }),
          createLazyRoute({
            path: "props",
            moduleLoader: () => import("#features/state-management/props/CounterWithPropsPage"),
          }),
          createLazyRoute({
            path: "redux",
            moduleLoader: () => import("#features/state-management/redux/CounterWithReduxPage"),
          }),
          createLazyRoute({
            path: "zustand",
            moduleLoader: () => import("#features/state-management/zustand/CounterWithZustandPage"),
          }),
        ],
      },
    ],
  },
];
