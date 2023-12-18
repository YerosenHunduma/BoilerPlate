import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // To use svg as a React component

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      utils: '/src/utils',
      app: '/src/app',
      store: 'src/store',
      styles: 'src/styles',
      assets: '/assets',
    },
  },
});
