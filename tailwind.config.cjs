/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#81B5A1',
          dark: '#293E40',
        },
        neutral: {
          light: '#F5F5F5',
          dark: '#1F2223',
          DEFAULT: '#323D3E',
        },
      },
    },
  },
  plugins: [],
};
