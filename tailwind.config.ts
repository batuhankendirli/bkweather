import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-primary': '#2d2d2d',
        'color-secondary': '#111015',
        'color-tertiary': '#1b1b1d',
        'color-fourth': '#bbd7ec',
        'color-fifth': '#aecadf',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      gridTemplateColumns: {
        city: 'repeat(auto-fill, minmax(14rem, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
