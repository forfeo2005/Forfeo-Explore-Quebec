/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quebec: {
          light: '#0055A4', // Bleu clair inspiré du drapeau
          dark: '#003366',  // Bleu profond pour les dégradés
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
