import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { generateContents } from './src/scripts/generate-contents';
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generateContents(),
    Inspect(),
    UnoCSS()
  ],
})
