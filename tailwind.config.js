/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
    screens: {
      desktop: '1280px',
    },

    extend: {
      colors: {
        accent: '#00bbd4',
        textPrimary: '#fafafa',
        bgPrimary: '#06101a',
        bgSecondary: '#050d16',
      },
      boxShadow: {
        card: '0 0 30px 10px rgba(4,11,18,0.75)',
      },
    },
  },
  plugins: [],
};
