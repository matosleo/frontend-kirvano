import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgretangle: '#F7FAFC',
        bginputs: '#E2E8F0',
        labeltext: '#718096',
        graytext: '#2D3748',
        blueButton: '#3182CE',
        whiteButton: '#F7FAFC',
        grayButton: '#4A5568',
        lightGreen: '#38B2AC',
        gray: '#828282'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
