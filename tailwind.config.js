/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'bg-nino':"url('./assets/img/nino_for_president_copia.jpg')",
    }
  },
  plugins: [],
}