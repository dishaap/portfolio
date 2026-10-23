import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // In dev, forward /api to the Express server (npm run dev:api).
    proxy: { '/api': 'http://localhost:3000' },
  },
});
