import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/", replacement: path.resolve(__dirname, "src") },
      { find: "@/assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@/constants",
        replacement: path.resolve(__dirname, "src/constants"),
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@/routes",
        replacement: path.resolve(__dirname, "src/routes"),
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
});
