import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/home/', // Match the "homepage" field in package.json
  plugins: [react()],
});
