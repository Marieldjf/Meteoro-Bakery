module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        naranja: {
          light: '#F1A34B',
          DEFAULT: '#F1A34B',
          dark:'#F1A34B',
          },
          gunmetal: {
            DEFAULT: '#393D46',
          },
          hueso: {
            DEFAULT: '#F6F6F6',
          },
        },
      },
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
