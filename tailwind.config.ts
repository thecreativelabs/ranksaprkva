import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-red': '#3B0D17',
        btnBg: {
          DEFAULT: '#F0B342',
          hover: '#c92045',
        },
      },  
      space: {
        // '5px': '5px',
      }    
    },
    fontFamily: {
      primary: 'sans-serif',
      secondary: ["DM Sans", 'sans-serif'],
      tertiary: 'serif'
    },
  },
  plugins: [],
};
export default config;
