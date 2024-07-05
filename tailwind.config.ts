import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': {
          '50': '#f3fdf0',
          '100': '#e3fcdc',
          '200': '#c8f6bc',
          '300': '#9bee87',
          '400': '#66dc4c',
          '500': '#41c324',
          '600': '#2f9b17',
          '700': '#297f16',
          '800': '#246417',
          '900': '#1f5215',
          '950': '#0b2d06',
        },

        // 'default': {
        //   '50': '#effef4',
        //   '100': '#d9ffe5',
        //   '200': '#b5fdcc',
        //   '300': '#7cf9a6',
        //   '400': '#3cec78',
        //   '500': '#13d455',
        //   '600': '#09b043',
        //   '700': '#0b8937',
        //   '800': '#0f6c30',
        //   '900': '#0e592a',
        //   '950': '#013214',
        // }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
