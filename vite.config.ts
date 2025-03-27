import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['lucide-react']
        }
      }
    },
    minify: 'terser',
    cssMinify: true,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
});