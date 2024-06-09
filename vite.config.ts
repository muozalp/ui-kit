import { resolve } from "path";
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue'

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/index.css',
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src"),
    }
  },
  build: {
    lib: {

      entry: resolve(__dirname, 'src/index.ts'),
      name: '@muozalp/ui-kit',
      fileName: (format) => `@muozalp/ui-kit.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
