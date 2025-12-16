/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hunic: {
          dark: '#0B1120', // Deep blue/charcoal
          card: '#151e32',
          cyan: '#06b6d4', // Neon cyan
          silver: '#94a3b8',
          accent: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    }
  },
  plugins: [],
}
