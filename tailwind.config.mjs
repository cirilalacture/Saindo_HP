/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          vermilion: '#B91C2C',
          crimson: '#991B1B',
          charcoal: '#171717',
          slate: '#525252',
          stone: '#737373',
          porcelain: '#FAFAF8',
          offwhite: '#F5F4F0',
          white: '#FFFFFF',
          border: '#E5E4DE',
          sand: '#ECEAE4',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        japanese: ['Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        card: '8px',
      },
    },
  },
  plugins: [],
};
