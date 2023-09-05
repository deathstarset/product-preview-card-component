/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#3c8067",
        cream: "#f2ebe3",
        "very-dark-blue": "#1c232b",
        "dark-grayish-blue": "#6c7289",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      spacing: {
        100: "550px",
      },
    },
  },
  plugins: [],
};
