import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@xenova/transformers'],
    include: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'transformers': ['@xenova/transformers']
        }
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})

