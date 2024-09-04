/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#F3F3F3",
          200: "#E8E8E8",
          300: "#D0D0D0",
          400: "#A2A2A2",
          500: "#737373",
          600: "#444444",
          700: "#151515",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
