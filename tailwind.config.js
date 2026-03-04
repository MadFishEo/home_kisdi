/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kisdi-red': '#DC2626',
        'kisdi-dark': '#991B1B',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
