/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile':'500px',
        'tablet':'870px',
        'mac':'1280px',
      }
    },
  },
  plugins: [],
}

