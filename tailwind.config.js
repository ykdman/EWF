/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6F9B84",
          1: "#136653",
          2: "#9DAAA1",
          3: "#7E8C85",
          4: "F5F3EF",
        },
        sub: {
          DEFAULT: "#E0E5B6",
          1: "#9CA986",
        },
        background: {
          light: "#F5F3EF",
          dark: "#071717",
        },
        text: {
          light: "#071717",
          dark: "#F5F3EF",
        },
      },
    },
  },
  plugins: [],
};
