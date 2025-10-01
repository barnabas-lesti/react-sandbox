import type { LoaderFunction, RouteObject } from "react-router";

interface ModuleLoaderResult {
  default: React.ComponentType;
  loader?: LoaderFunction;
}

type CreateLazyRouteOptions = Pick<RouteObject, "index" | "path" | "HydrateFallback"> & {
  moduleLoader: () => Promise<ModuleLoaderResult>;
};

export function createLazyRoute(options: CreateLazyRouteOptions): RouteObject {
  const { moduleLoader, ...routeObject } = options;
  return {
    // TODO: Add proper fallback element, like a loading spinner.
    hydrateFallbackElement: <></>,
    ...routeObject,
    lazy: async () => {
      const module = await moduleLoader();
      return {
        loader: module.loader,
        Component: module.default,
      };
    },
  };
}
