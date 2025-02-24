import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

 
// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "wh-ui-pack",
      fileName: (format) => `wh-ui-pack.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_variables.scss";`
      }
    }
  }
})
