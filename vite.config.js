import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration — React plugin only, no extra bloat.
// Keeping this minimal helps keep the Lighthouse performance score high.
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor code so browsers can cache framer-motion/react separately
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
