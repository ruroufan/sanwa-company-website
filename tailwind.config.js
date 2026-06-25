/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf9f6',
        ivory: '#fffefa',
        ink: '#242320',
        warmText: '#77746d',
        warmLine: '#e2dccf',
        sage: '#7f876a',
        sageDark: '#646c54',
        gold: '#eadcc7',
        mist: '#f7f6f2',
        line: '#e2dccf',
        navy: '#646c54',
        sand: '#fffefa',
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Yu Gothic',
          'Meiryo',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 28px 80px rgba(36, 35, 32, 0.045)',
      },
    },
  },
  plugins: [],
};
