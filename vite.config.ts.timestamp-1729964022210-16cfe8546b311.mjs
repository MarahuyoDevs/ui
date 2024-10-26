// vite.config.ts
import { defineConfig } from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/vite/dist/node/index.js";
import solid from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import tailwindcss from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/autoprefixer/lib/autoprefixer.js";
import path from "path";
import mdx from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/@mdx-js/rollup/index.js";
import remarkGfm from "file:///home/robeckk/Documents/work/marahuyo-ui/node_modules/remark-gfm/index.js";
var __vite_injected_original_dirname = "/home/robeckk/Documents/work/marahuyo-ui";
var vite_config_default = defineConfig({
  base: "/ui/",
  plugins: [
    mdx({ jsxImportSource: "solid-jsx", remarkPlugins: [remarkGfm] }),
    solid()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yb2JlY2trL0RvY3VtZW50cy93b3JrL21hcmFodXlvLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yb2JlY2trL0RvY3VtZW50cy93b3JrL21hcmFodXlvLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JvYmVja2svRG9jdW1lbnRzL3dvcmsvbWFyYWh1eW8tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHNvbGlkIGZyb20gXCJ2aXRlLXBsdWdpbi1zb2xpZFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1keCBmcm9tIFwiQG1keC1qcy9yb2xsdXBcIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogXCIvdWkvXCIsXG4gIHBsdWdpbnM6IFtcbiAgICBtZHgoeyBqc3hJbXBvcnRTb3VyY2U6IFwic29saWQtanN4XCIsIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtHZm1dIH0pLFxuICAgIHNvbGlkKCksXG4gIF0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcywgYXV0b3ByZWZpeGVyXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiflwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsb0JBQW9CO0FBQ3ZVLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQU50QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJLEVBQUUsaUJBQWlCLGFBQWEsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQUEsSUFDaEUsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
