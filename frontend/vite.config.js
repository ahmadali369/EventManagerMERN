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

      // '/other-api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/other-api/, ''),
      // },
    },
  },


})
