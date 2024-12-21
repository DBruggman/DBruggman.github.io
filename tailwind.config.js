/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        firstc:`#152A38`,
      secondc:`#29435C`,
      thirdc:`#556E53`,
      fourthc:`#D1D4C9`
      }
    },
  },
  plugins: [],
}

