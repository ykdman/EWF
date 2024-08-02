/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6F9B84",
          1: "#136653",
          2: "#9DAAA1",
          3: "#7E8C85",
          4: "F5F3EF",
        },
        background: {
          light: "#F5F3EF",
          dark: "#071717",
        },
      },
    },
  },
  plugins: [],
};
