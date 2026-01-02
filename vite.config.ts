import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nous utilisons le chemin ABSOLU exact de votre dépôt GitHub
  // Cela empêche les erreurs de navigation
  base: '/Forfeo-Explore-Quebec/', 
})
