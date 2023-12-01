import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  server:{
    port:7777
  },
  preview:{
    port:7777,
    host:true,
    strictPort:7777
  }
})
