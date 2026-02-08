import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'web',
  base: '/simple-page-with-WCAG-errors/',
  build: {
    target: "esnext",
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        omoss: resolve(__dirname, "omoss.html")
      },
      output: {
        manualChunks: {}, 
      },
    },
  },
})
