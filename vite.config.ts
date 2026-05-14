import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/Kacao/",
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});