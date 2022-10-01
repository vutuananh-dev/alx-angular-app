/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'helvetica-neue': ['Helvetica Neu']
    },
    colors: {
      white: '#fff',
      'primary': {
        DEFAULT: '#A2A83E'
      },
      'secondary': {
        DEFAULT: '#562522',
        light: '#E2CFCE',
      },
      neutral: {
        n20: '#DFDFDF',
        n40: '#999',
        n60: '#666',
        n80: '#333',
        n100: '#000'
      }
    },
    container: {
      screens: {
        xl: '1248px',
      }
    },
    extend: {
      height: {
        '513': '513px !important'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
