import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Ganti "/nama-repo/" dengan nama repository GitHub kamu, contoh:
  // jika repo-nya https://github.com/USERNAME/gallery-project maka base = "/gallery-project/"
  // Jika deploy ke custom domain atau di root (username.github.io/username), gunakan base: "/"
  base: process.env.VITE_BASE_PATH || "/gallery-project/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
