import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // Exposes the dev server to your local network (Wi-Fi)
    port: 5173,
  },
  preview: {
    host: true, // Exposes the production preview to your local network
    port: 5173,
  },
})
