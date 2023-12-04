/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {

        'Poppins': ['Poppins', 'sans-serif','Lato'],
        'Noto' : ['Noto Sans','sans-serif'],
      },
      
    },
  },
  plugins: [],
}