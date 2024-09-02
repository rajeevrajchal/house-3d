import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "#root/*": resolve(__dirname),
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@constant": resolve(__dirname, "./src/constant"),
      "@layout": resolve(__dirname, "./src/layout"),
      "@module": resolve(__dirname, "./src/module"),
      "@hook": resolve(__dirname, "./src/hook"),
      "@model": resolve(__dirname, "./src/model"),
      "@enum": resolve(__dirname, "./src/enum"),
      "@plugin": resolve(__dirname, "./src/plugin"),
      "@service": resolve(__dirname, "./src/service"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@type": resolve(__dirname, "./src/type"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@validations": resolve(__dirname, "./src/validations"),
      "@plugins": resolve(__dirname, "./src/plugins"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@api": resolve(__dirname, "./src/api"),
    },
  },
});
