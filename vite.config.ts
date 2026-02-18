import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // If your site is at svara-group.com (root domain), base should be '/'
  base: '/', 
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@google/genai'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
