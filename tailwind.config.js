/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'map-border-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'map-glow': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        'map-scan': {
          '0%': { top: '-4%', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { top: '104%', opacity: '0' },
        },
      },
      animation: {
        'map-border-shift': 'map-border-shift 5s ease-in-out infinite',
        'map-glow': 'map-glow 4s ease-in-out infinite',
        'map-scan': 'map-scan 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
