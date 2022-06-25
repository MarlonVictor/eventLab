/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-bg.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
        },
        purple: {
          300: '#9fa5e0',
          500: '#6C72CB',
        },
        pink: {
          500: '#CB69C1',
        },
        blue: {
          500: '#61DAFB',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#EEEDF0',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#32363E',
          600: '#282C34',
          700: '#20232A',
          900: '#17181F'
        }
      },
    },
  },
  plugins: [],
}
