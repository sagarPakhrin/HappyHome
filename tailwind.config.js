const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Questrial', 'sans-serif'],
    },
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
