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
          entryFileNames: 'assets/js/[name].js',
          chunkFileNames: 'assets/js/[name].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name][extname]';
            }
            return 'assets/[name][extname]';
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