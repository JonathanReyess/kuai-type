import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // React + router in their own chunk, cached aggressively
              vendor: ['react', 'react-dom', 'react-router-dom'],
              // Gemini SDK only loaded when AI generation is triggered
              gemini: ['@google/genai'],
              // storyData is already dynamic-imported, Rollup will split it
              // automatically — no manual entry needed here
            },
          },
        },
      },
    };
});
