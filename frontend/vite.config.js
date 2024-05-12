import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  server: {
    proxy: {
      '/api/services': {
        target: 'http://localhost:2000',
        changeOrigin: true,
      },

      '/event': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/event/, ''),
      },
    },
  },


})
