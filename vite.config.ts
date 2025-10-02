import tailwindCssPlugin from "@tailwindcss/vite";
import reactPlugin from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

/**
 * Vite build configuration definition.
 *
 * https://vite.dev/config
 */
export default defineConfig((config) => {
  const env = loadEnv(config.mode, "", "") as ImportMetaEnv;
  const port = Number(env.PORT ?? 3000);

  return {
    root: "./src",
    envDir: "..",
    envPrefix: "PUBLIC",
    server: { port },
    preview: { port },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
    plugins: [tailwindCssPlugin(), tsconfigPathsPlugin(), reactPlugin()],
  };
});
