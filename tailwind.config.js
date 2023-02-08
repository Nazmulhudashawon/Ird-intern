// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",

//   ],
//   theme: {
//     extend: {
//       fontfamily: {
//         Poppins:['poppins'],
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  subject: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require('@tailwindcss/forms'),],
  
};