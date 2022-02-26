import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // Ant Design variables modification:
          '@btn-primary-bg': '#4388DD',
          '@component-background': '#4388DD'
        }
      }
    }
  },
  plugins: [react()]
})