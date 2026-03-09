import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/DesktopModules/ClosedAI/ReactModule/dist/",
  server: {
    proxy: {
      "/DesktopModules": {
        target: "http://localhost",
        changeOrigin: true,
      },
      "/Portals": {
        target: "http://localhost",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: path.resolve("C:/DNN/DesktopModules/ClosedAI/ReactModule/dist"),
    emptyOutDir: true,

    rollupOptions: {
      output: {
        entryFileNames: "app.js",
        chunkFileNames: "app.js",

        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "app.css";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
