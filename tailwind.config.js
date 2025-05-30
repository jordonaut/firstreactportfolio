/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['max-w-5xl'], // Ensures max-w utilities aren't purged
  theme: {
    extend: {
      boxShadow: {
        'mint-glow': '0 0 12px rgba(165, 243, 206, 0.3)',
      },
    },
  },
  plugins: [],
};
