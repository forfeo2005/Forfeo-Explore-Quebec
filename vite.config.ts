import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/forfeo-explore-quebec/', // <--- LIGNE ACTIVÉE (sans les // au début)
})
