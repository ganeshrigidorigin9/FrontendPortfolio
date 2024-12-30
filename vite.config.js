import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
    rollupOptions: {
      // If you need to externalize certain dependencies, ensure they are correctly specified
      external: ['react-router-dom'],
    },
  },
  base: './', // Ensure all assets are referenced relatively, useful for Vercel deployments
});
