/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {colors: {
      'header': '#001541',
    }},
  },
  plugins: [],
};
