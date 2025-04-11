import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy /api requests to the backend
      '/api': {
        target: 'http://localhost:3000', // Backend server URL
        changeOrigin: true, // Needed for virtual hosted sites
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
