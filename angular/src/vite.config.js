import { defineConfig } from 'vite';
import { vitePluginForTailwindCSS } from 'vite-plugin-tailwindcss';

export default defineConfig({
  plugins: [
    vitePluginForTailwindCSS(),
  ],
});