/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", //quais arquivos vão conter classes do Tailwind
    "./src/**/*.{js,ts,jsx,tsx}", //quais arquivos vão conter classes do Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

