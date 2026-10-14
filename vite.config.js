import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));
const sourcePages = resolve(root, 'src/pages');

export default defineConfig({
  root: sourcePages,
  base: '/proofwritinginitiative/',
  publicDir: false,
  build: {
    outDir: resolve(root, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(sourcePages, 'index.html'),
        courses: resolve(sourcePages, 'courses.html'),
        about: resolve(sourcePages, 'about.html'),
        register: resolve(sourcePages, 'register.html'),
        contact: resolve(sourcePages, 'contact.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
