/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM-sans": ["DM Sans", "sans-serif"],
        Amiri: ["Amiri", "serif"],
        primary: "sans-serif",
        secondary: ["DM Sans", "sans-serif"],
        tertiary: "serif",
      },
      colors: {
        "light-red": "#C42A1C",
        "light-pink": "#E55447",
        "dark-red": "#3B0D17",
        gray: "#F7F7F6",
        lightblue: "#DAF4F4",
        lightyellow: "#ffae00",
        darkyellow: "#F0B342",
        lightgreen: "#8AC7C7",
        btnBg: {
          DEFAULT: "#F0B342",
          hover: "#c92045",
        },
      },
      fontSize: {
        "6xl": ["80px", "80px"],
        xs: ["12px", "16px"],
        sm: ["14px", "18px"],
        base: ["16px", "20px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        xxl: ["28px", "30px"],
        xxxl: ["37px", "52px"],
        xxxxl: ["50px", "80px"],
        xxxxxl: ["65px", "85px"],
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
// export default config;
