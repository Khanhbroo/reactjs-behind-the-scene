import { defineConfig } from "vite";
import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite(), react()],
});
