import { Outlet, type RouteObject } from "react-router";

import { createLazyRoute } from "#core/router/createLazyRoute";

export const APP_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      createLazyRoute({ index: true, moduleLoader: () => import("#features/home/HomePage") }),
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
          createLazyRoute({
            path: "big-object",
            moduleLoader: () => import("#features/state-management/big-object/BigObjectPage"),
          }),
        ],
      },
      {
        path: "async-data",
        children: [
          createLazyRoute({
            path: "promises",
            moduleLoader: () => import("#features/async-data/promises/PromisesPage"),
          }),
          createLazyRoute({
            path: "async-user-experience",
            moduleLoader: () => import("#features/async-data/async-user-experience/AsyncUserExperiencePage"),
          }),
        ],
      },
    ],
  },
];
