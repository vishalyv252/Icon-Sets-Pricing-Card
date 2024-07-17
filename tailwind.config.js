/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"]
      },
      screens: {
        "Tablet_Design_View": {"max": "769px", "min": "426px"},
        "Large_Mobile_Design_View": {"max": "426px", "min": "321px"},
        "Small_Mobile_Design_View": {"max": "321px"}
      }
    },
  },
  plugins: [],
}

