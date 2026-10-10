import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          styled: ['styled-components'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
  resolve: {
    // fallback на случай, если tsconfigPaths по какой-то причине не подхватит
    // alias: { '@': '/src' },
  },
});
