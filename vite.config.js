import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <--- הגדרה זו קריטית למסך הלבן ב-Capacitor, מאלצת נתיב יחסי.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})