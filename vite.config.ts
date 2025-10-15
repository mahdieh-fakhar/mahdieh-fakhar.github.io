import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const clientRoot = path.resolve(currentDir, "client");
const sharedRoot = path.resolve(currentDir, "shared");
const assetsRoot = path.resolve(currentDir, "attached_assets");
const docsDir = path.resolve(currentDir, "docs");

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [react()],
    base: isDev ? "/" : "/mf1/",
    resolve: {
      alias: {
        "@": path.resolve(clientRoot, "src"),
        "@shared": sharedRoot,
        "@assets": assetsRoot,
      },
    },
    root: clientRoot,
    build: {
      outDir: docsDir,
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
