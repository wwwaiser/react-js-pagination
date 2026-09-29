import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the repository root of master, so the built demo is
// committed to demo/ and the root index.html forwards to it.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../demo",
    emptyOutDir: true
  }
});
