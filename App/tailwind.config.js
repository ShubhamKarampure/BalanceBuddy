/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx','./src/**/*.{tsx,jsx,css,html}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

