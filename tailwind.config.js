/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        new: '#5133A7',
      },
      backgroundImage: {
        'login-background': "url('./assets/login-background.jpg')",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"], 
      },
    },
  },
  plugins: [],
}

