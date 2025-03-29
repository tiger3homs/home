import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for deployment. Should match the subdirectory on GitHub Pages.
  // If deploying to https://<USERNAME>.github.io/, use '/'.
  // If deploying to https://<USERNAME>.github.io/<REPO_NAME>/, use '/<REPO_NAME>/'.
  base: '/home/', // Set to the repository name for GitHub Pages project sites
  plugins: [react()],
});
