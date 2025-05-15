/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'blink': 'blink 1s step-end infinite',
          'gradient': 'gradient 15s ease infinite',
          'typing': 'typing 3.5s steps(40, end) forwards',
          'blink-caret': 'blink-caret 0.75s step-end infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          typing: {
            'from': { width: '0' },
            'to': { width: '100%' },
          },
          'blink-caret': {
            'from, to': { borderColor: 'transparent' },
            '50%': { borderColor: 'rgb(192, 132, 252)' }, // purple-400
          },
        },
        backgroundSize: {
          '300%': '300%',
        },
      },
    },
    plugins: [],
  }