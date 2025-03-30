/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'], // Use CSS variable, fallback to sans-serif
      },
    },
  },
  plugins: [],
};
