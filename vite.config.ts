import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      esbuild: {
        jsxImportSource: "hono/jsx/dom", // Optimized for hono/jsx/dom
      },
      build: {
        sourcemap: true,
        rollupOptions: {
          external: ["npm:hono/client", "npm:hono/jsx", "npm:hono/jsx/dom"],
          input: "./src/client.tsx",
          output: {
            paths: {
              "npm:hono/client": "https://unpkg.com/hono@4.5.8/dist/client/index.js",
              "npm:hono/jsx": "https://unpkg.com/hono@4.5.8/dist/jsx/index.js",
              "npm:hono/jsx/dom": "https://unpkg.com/hono@4.5.8/dist/jsx/dom/index.js",
            },
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  } else {
    return {};
  }
});
