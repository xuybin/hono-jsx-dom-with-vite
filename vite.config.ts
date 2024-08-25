import { defineConfig } from 'vite'
// import devServer from '@hono/vite-dev-server'


export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      esbuild: {
        jsxImportSource: 'hono/jsx/dom' // Optimized for hono/jsx/dom
      },
      build: {
        sourcemap: true,
        rollupOptions: {
          input: './src/client.tsx',
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name].[ext]',
          }
        }
      }
    }
  } else {
    return {
      plugins: [
        // devServer({
        //   entry: 'src/index.tsx'
        // })
      ]
    }
  }
})
