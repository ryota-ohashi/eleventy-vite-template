import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    root: 'src',
    base: command === 'serve' ? '' : '/',
    build: {
      outDir: '../public',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/scripts/main.js')
        },
        output: {
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      }
    },
    server: {
      port: 3000,
      strictPort: true,
      watch: {
        usePolling: true
      }
    }
  };
});