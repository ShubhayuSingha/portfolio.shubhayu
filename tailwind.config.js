/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your files
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        dancing: ['Dancing Script', 'sans-serif'],        
      },

      textShadow: {
        outline: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px -1px 0 #ffffff, 1px 1px 0 #ffffff',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-outline': {
          textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px -1px 0 #ffffff, 1px 1px 0 #ffffff',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};