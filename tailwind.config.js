/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#EA1111',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    preflight: true,
  },
  important: true,
}
