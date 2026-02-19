import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
        },
      },
    },
  },
})
