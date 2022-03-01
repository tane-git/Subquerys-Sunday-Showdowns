import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { theme } from './src/theme'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    }
  },
  plugins: [react()]
})