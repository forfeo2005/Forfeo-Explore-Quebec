import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Forfeo-Explore-Quebec/', // <--- Majuscules F, E, Q obligatoires pour GitHub !
})
