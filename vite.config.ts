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
          '@component-background': '#4388DD',
          // can I add a varied color for the background?
          // '@layout-header-background': '#4388DD'
          '@layout-header-background': 'linear-gradient(293.04deg,rgba(255,69,129,.1) 4.09%,rgba(67,136,221,.1) 70.16%)'
        }
      }
    }
  },
  plugins: [react()]
})