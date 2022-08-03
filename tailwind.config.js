/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        1500: "1500ms",
      },
    },
  },
};
