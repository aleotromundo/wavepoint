import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client/',
  base: './',
  server: { host: true, open: false },
  build: { outDir: '../dist', emptyOutDir: true, sourcemap: false },
})
