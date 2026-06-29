import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion']
        }
      }
    }
  },
  // For better SEO (SPA optimization)
  server: {
    port: 3000
=======
    outDir: 'dist'
>>>>>>> 416963337d9f3f19d0410a944a2f0ba29f3077b0
  }
})