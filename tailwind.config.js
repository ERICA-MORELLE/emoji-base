// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // Assure-toi que cette ligne est bien présente
//     "node_modules/tw-elements-react/dist/js/**/*.js"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("tw-elements-react/dist/plugin") // Vérifie bien cette ligne
//   ],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
