module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1f2937',
          700: '#374151',
          300: '#d1d5db',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
        green: {
          400: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
