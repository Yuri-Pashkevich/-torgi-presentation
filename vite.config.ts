import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  build: {
    base: "http://Yuri-Pashkevich.github.io/-torgi-presentation",
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
