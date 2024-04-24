import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';

export default defineConfig(() => {
  return {
    server: {
      port: 9000,
      open: true,
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@types': path.resolve(__dirname, 'src/types.ts'),
        '@utils': path.resolve(__dirname, 'src/utils.ts'),
      },
    },
    plugins: [
      checker({
        typescript: true,
      }),
      react(),
      manualChunksPlugin(),
    ],
  };
});
