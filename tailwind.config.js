/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      // TODO: 사용할 폰트 추가
      // example: noto-kr: ['Noto Sans KR', 'sans-serif'],
    },
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
