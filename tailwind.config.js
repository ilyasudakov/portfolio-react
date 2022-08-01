/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
