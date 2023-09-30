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
    },
  },
  plugins: [],
};
