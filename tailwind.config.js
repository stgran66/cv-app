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
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '15px',
      l: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '36px',
      '4xl': '60px',
    },
    lineHeight: {
      xs: '20px',
      s: '24px',
      m: '28px',
      l: '30px',
      xl: '38px',
      '2xl': '46px',
    },
    spacing: {
      1: '1px',
      2: '5px',
      3: '10px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '40px',
      8: '48px',
      9: '50px',
      10: '60px',
      11: '70px',
      12: '80px',
      13: '100px',
      sectionPadding: '130px',
      buttonWidth: '170px',
      heroPadding: '200px',
      sectionTextContainer: '740px',
      container: '1170px',
    },

    extend: {
      colors: {
        accent: '#00bbd4',
        textPrimary: '#fafafa',
        textSecondary: '#777777',
        textDesc: '#e8e1e1',
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
