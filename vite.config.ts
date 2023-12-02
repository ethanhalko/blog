import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { generateContents } from './src/scripts/generate-contents';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    generateContents(),
    react(),
    UnoCSS()
  ],
})
