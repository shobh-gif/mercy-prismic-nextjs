/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-100": "#CE23F2 !important",
        "cyan-100": "#45DAFF !important",
        "black-100": " #101010",
        "red-100": "#F82B60",
        "blue-100": "#0061FF",
        "orange-100": "#FF9900",
      },
      fontSize: {
        base: "18px !important",
        "2.5xl": "30px",
      },
    },
  },
  plugins: [],
};
