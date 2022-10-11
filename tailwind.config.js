/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Nunito Sans",
    },
    screens: {
      sm: "560px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        darkerBlue: "hsl(207, 26%, 17%)",
        darkBlueText: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        lightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
