import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for deployment. Should match the subdirectory on GitHub Pages.
  // If deploying to https://<USERNAME>.github.io/, use '/'.
  // If deploying to https://<USERNAME>.github.io/<REPO_NAME>/, use '/<REPO_NAME>/'.
  base: '/', // Assuming deployment to the root of tiger3homs.github.io
  plugins: [react()],
});
