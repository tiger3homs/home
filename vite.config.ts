import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path explicitly to match the GitHub Pages deployment subdirectory
  base: process.env.NODE_ENV === 'production' ? '/home/' : '/', 
  plugins: [react()],
});
