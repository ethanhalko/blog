import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { generateManifest } from './src/scripts/generate-manifest';
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generateManifest(),
    Inspect(),
    UnoCSS()
  ],
})
