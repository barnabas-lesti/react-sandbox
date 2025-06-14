/// <reference types="vite/client" />

// Add custom environment variables here for typecheck and intellisense.
interface ImportMetaEnv {
  /**
   * Port to run the application on.
   * @example
   * PORT=4000
   */
  readonly PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
