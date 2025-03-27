import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/home/', // Set the base path to match the GitHub Pages deployment
  plugins: [react()],
});
