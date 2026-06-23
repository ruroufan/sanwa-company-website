/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121417',
        mist: '#f5f6f8',
        line: '#e6e8ec',
        navy: '#16345c',
        sand: '#f5f0e8',
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
        soft: '0 18px 50px rgba(18, 20, 23, 0.08)',
      },
    },
  },
  plugins: [],
};
