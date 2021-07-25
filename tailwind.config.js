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
        coolGray: colors.coolGray,
        sky: colors.sky,
        teal: colors.teal,
        primary: '#5FBACD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
