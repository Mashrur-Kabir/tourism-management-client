/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merri: ["Merriweather", 'serif'],
        carme: ["Carme", 'serif'],
        ubuntu: ["Ubuntu", 'serif'],
        rubik: ["Rubik", 'serif'],
      },
    },
  },
  plugins: [],
}

