import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/studio-os/', // Базовый путь для GitHub Pages https://kaylas000.github.io/studio-os/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@library': path.resolve(__dirname, '../library'),
      '@core': path.resolve(__dirname, '../core-engine')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  }
});
