import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

const port = 3000;

// https://vite.dev/config/
export default defineConfig({
  root: "./src",
  envDir: "..",
  server: { port },
  preview: { port },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [tsconfigPathsPlugin(), reactPlugin()],
});
