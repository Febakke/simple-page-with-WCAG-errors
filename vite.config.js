import { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'web',
  base: '/simple-page-with-WCAG-errors/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "web/index.html"),
        omoss: resolve(__dirname, "web/omoss.html"),
      },
      output: {
        manualChunks: {}, 
      },
    },
  },
})
