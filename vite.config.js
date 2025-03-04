import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [vue(), checker({ vueTsc: true })],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/style.scss";`,
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
