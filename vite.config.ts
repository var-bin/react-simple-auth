import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
    hmr: true,
  },
  plugins: [react()],
});
