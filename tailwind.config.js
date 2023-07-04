/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.writing-vertical-r': {
          writingMode: 'vertical-rl',
        },
      })
    },
  ],
}
