import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: {
          '50': '#effef3',
          '100': '#dafee3',
          '200': '#b7fbca',
          '300': '#80f5a2',
          '400': '#41e772',
          '500': '#1ae055',
          '600': '#0dac3d',
          '700': '#0e8733',
          '800': '#116a2d',
          '900': '#105727',
          '950': '#023113',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
