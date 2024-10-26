import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";

export default defineConfig({
  base: "/ui/",
  plugins: [
    mdx({ jsxImportSource: "solid-jsx", remarkPlugins: [remarkGfm] }),
    solid(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
  },
});
