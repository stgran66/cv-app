/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        accent: '#00bbd4',
        textPrimary: '#fafafa',
        bgPrimary: '#06101a',
        bgSecondary: '#050d16',
      },
      dropShadow: {
        '3xl': '0 25px 50px -12px rgb(0 0 0 / 0.75);',
      },
      boxShadow: {
        '3xl': '13px 27px 30px 0px rgba(6, 16, 26, 0.75)',
      },
    },
  },
  plugins: [],
};
