module.exports = {
  content: [],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        darkBlack: '#343434',
        ligthBlack: '#706E6E',
        orange: '#F6B54D',
        darkGreen: '#4A9480',
        aqua: '#5DBBA2',
        lightGreen: '#E4F4EF',
        gray: '#F3F3F3',
        darkYellow: '#D8BC2F'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
