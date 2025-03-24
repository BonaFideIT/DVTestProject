import { defineConfig } from 'vite'
import { resolve } from "path"
import { svelte } from '@sveltejs/vite-plugin-svelte'


// https://vite.dev/config/
export default defineConfig({
  base : '/static/',
  build: {
    manifest: "manifest.json",
    emptyOutDir: true,
    sourcemap: true,
    outDir: resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        foo: resolve(__dirname, '../apps/foo/templates/foo/frontend/src/main.ts'),
      },
      output: {
        assetFileNames: "[name]/main.[ext]",
        chunkFileNames: "[name]/main.js",
        entryFileNames: "[name]/main.js",
      }
    }
  },
  plugins: [svelte()],
})
