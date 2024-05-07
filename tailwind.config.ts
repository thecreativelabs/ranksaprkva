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
        Amiri: ["Kanit", "sans-serif"],
        primary: ["Kanit", "sans-serif"],
        tertiary: ["Kanit", "sans-serif"],
      },
      colors: {
        // rankspark
        violetExtraLight: "#EDEAFF",
        violetLight: "#E2DDFF",
        violet: "#895BF7",

        // victorious
        "light-red": "#895BF7",
        "light-pink": "#895BF7",
        "dark-red": "#000",
        darkyellow: "#F0B342",
        gray: "#F7F7F6",
        lightblue: "#DAF4F4",
        lightyellow: "#ffae00",
        lightgreen: "#8AC7C7",
        graybg: "#E5E2F7",
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
        xxxxl: ["50px", "70px"],
        xxxxxl: ["65px", "85px"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
// export default config;
