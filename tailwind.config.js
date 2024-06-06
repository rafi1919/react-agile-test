/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fire:'#FB6D6C',
        water:'#56AEFB',
        leaf:'#18CEA3',
        elect:'#FCD52C',
        ghost:'#645AA4',
        fairy:'#FA8CAA'
      }
    },
  },
  plugins: [],
}