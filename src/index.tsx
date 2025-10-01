import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const { App } = await import("#app/App");

createRoot(document.getElementById("app_root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
