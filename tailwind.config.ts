import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,jsx,mdx,ts,tsx}',
    './src/components/**/*.{js,jsx,mdx,ts,tsx}',
    './src/pages/**/*.{js,jsx,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {},
      fontSize: {},
      colors: {
        green: '#11ac3a',
        red: '#e33920',
        yellow: '#dfb230',
      },
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
