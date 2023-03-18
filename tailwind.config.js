/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        "border-green": "#64BA4F",
        "background-green": "#A4ED92",
        "border-gray": "#838383",
        "background-gray": "#D9D9D9",
        "background-red": "#FF6161",
        "border-red": "#BC3535",
      },
    },
  },
  plugins: [],
};
