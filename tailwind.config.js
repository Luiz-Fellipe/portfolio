/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        N75: '#F9FAFC',
        G100: '#5CC4C4',
        B600: '#2B3443',
        B700: '#242E3A',
      },
    },
  },
  plugins: [],
};
