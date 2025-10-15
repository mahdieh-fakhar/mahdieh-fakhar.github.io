import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";
import { getRouterBase } from "./lib/basePath";

const routerBase = getRouterBase();

createRoot(document.getElementById("root")!).render(
  <Router base={routerBase}>
    <App />
  </Router>,
);
