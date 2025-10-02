// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        everforest: {
          // Backgrounds and UI
          bg: '#2F383E',
          bg1: '#374146',
          bg2: '#3F494E',
          bg3: '#475156',
          bg4: '#515B60',
          fg: '#D3C6AA',
          fg1: '#A7C080',
          fg2: '#859289',
          fg3: '#7A8478',

          // Accent colors
          red: '#E67E80',
          orange: '#E69875',
          yellow: '#DBBC7F',
          green: '#A7C080',
          aqua: '#83C092',
          blue: '#7FBBB3',
          purple: '#D699B6',
          grey0: '#7A8478',
          grey1: '#859289',
          grey2: '#9DA9A0',
        },
      },
    },
  },
  plugins: [],
}
