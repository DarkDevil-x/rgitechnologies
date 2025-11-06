import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [react(),viteImagemin({
    mozjpeg: { quality: 75 },
    pngquant: { quality: [0.7, 0.9] },
    webp: { quality: 75 },
  }),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})