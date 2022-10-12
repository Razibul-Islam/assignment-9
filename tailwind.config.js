/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000",

          secondary: "#dbb667",

          accent: "#fc5abb",

          neutral: "#1A1B23",

          "base-100": "#E7E7E9",

          info: "#5E9CD9",

          success: "#63E9B3",

          warning: "#F1A713",

          error: "#F04F3D",
        },
      },
    ],
  },
};
