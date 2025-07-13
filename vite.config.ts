import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UseSessionStorage',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
