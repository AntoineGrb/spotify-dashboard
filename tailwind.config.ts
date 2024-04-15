import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hind: ['var(--font-hind)'],
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors:{
        'black': '#191414',
        'gray-dark': '#212121',
        'gray-mid': '#353635 ',
        'gray-light': '#282828',
        'gray-font': '#B3B3B3',
        'white-font': '#FFFFFF',
      },
      keyframes: {
        pulse1: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        pulse3: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: { 
        'pulse-slow': 'pulse1 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse2 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse3 0.9s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
