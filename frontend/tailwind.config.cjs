/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        lg: "48rem",
        xl: "60rem",
        "2xl": "72rem",
        "3xl": "84rem",
      },
      minHeight: {
        lg: "48rem",
        xl: "60rem",
        "2xl": "72rem",
        "3xl": "84rem",
      },
    },
  },
  plugins: [],
};
