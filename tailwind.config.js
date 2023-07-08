/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        dropLeft: {
          '0%': {
            transformOrigin: 'bottom left',
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
          '40%': {
            transformOrigin: 'bottom left',
            transform: 'translateX(0) translateY(0) rotate(24deg)',
          },
          '100%': {
            transformOrigin: 'bottom left',
            transform: 'translateX(0) translateY(2000px) rotate(24deg)',
          },
        },
      },
      animation: {
        approach: 'approach 0.5s ease forwards',
        dropLeft: 'dropLeft 0.8s ease',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      diphylleia: ['Diphylleia', 'serif'],
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
