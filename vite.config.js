import { defineConfig } from 'vite'

export default defineConfig({
  root: 'web',
  base: '/simple-page-with-WCAG-errors/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
