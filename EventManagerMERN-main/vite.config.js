// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import reactRefresh from '@vitejs/plugin-react-refresh';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // plugins: [reactRefresh()],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy configuration
      '/api': {
        target: 'http://localhost:your_server_port', // Replace with your server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Remove /api prefix from request path
      },
    }
  }
});
