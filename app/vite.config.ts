import { defineConfig } from "vite";

// webOS carrega o app a partir de arquivos locais (file://-like no container),
// então os caminhos precisam ser relativos, não absolutos.
export default defineConfig({
  base: "./",
  build: {
    target: "es2020",
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 5173,
    open: true,
  },
});
