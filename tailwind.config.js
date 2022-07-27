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
      screens: {
        'min2xl': { 'min': '1441px' },
        // => @media (max-width: 1535px) { ... }
  
        '2xl': { 'max': '1441px' },
        // => @media (max-width: 1535px) { ... }
  
        'xl': { 'max': '1367px' },
        // => @media (max-width: 1279px) { ... }
  
        'lg': { 'max': '1281px' },
        // => @media (max-width: 1023px) { ... }
  
        'md2': { 'max': '1180px' },
        // => @media (max-width: 767px) { ... }
  
        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
  
        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
