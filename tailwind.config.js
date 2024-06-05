/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fire:'#FB6D6C',
        water:'#76BDFB',
        leaf:'#49D0B0',
        elect:'#F5D650',
        ghost:'#645AA4',
        fairy:'#FA8CAA'
      }
    },
  },
  plugins: [],
}