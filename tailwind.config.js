/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        inter: ["Inter"],
        lato: ["Lato"],
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
        raleway: ["Raleway"],
        worksans: ["Work Sans"]
      }
    },
  },
  plugins: [],
}

