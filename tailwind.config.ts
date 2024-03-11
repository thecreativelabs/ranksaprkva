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
        // sans: ["Public Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        'DM-sans': ["DM Sans", 'sans-serif'],
        'Amiri': ["Amiri", "serif"],

        
      },
      fontSize: {
        "6xl": ["80px", "80px"],
        // 'lg': ["21px", "34px"],
        'xs': ['12px', '16px'],  
        'sm': ['14px', '18px'],  
        'base': ['16px', '20px'],
        'lg': ['18px', '24px'], 
        'xl': ['20px', '28px'], 
        'xxl': ['28px', '30px'],
        'xxxl': ['37px', '67px'],



        
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
