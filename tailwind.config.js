/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kisdi-red': '#DC2626',
        'kisdi-dark': '#991B1B',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
