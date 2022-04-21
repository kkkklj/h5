import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/scss/global.scss";'
      }
    }
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://124.221.136.33',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
