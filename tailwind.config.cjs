/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: { Ubuntu: ["Ubuntu", "sans-serif"] },
      colors: {
        design: {
          MarineBlue: "#061F32",
          PurplishBlue: "#9DC1F7",
          PastelBlue: "#E0F4FD",
          LightBlue: "#DAF4F9",
          StrawberryRed: "#FB4B39",
          CoolGray: "#A7AEB2",
          LightGray: "#E3E9ED",
          Magnolia: "#FDFDFD",
          Alabaster: "#FBFBFB",
          BG: "#eef5ff",
        },
      },
      screens: {
        ms: "320px",

        mm: "375px",

        ml: "425px",

        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1440px",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        DiceSpin: "spin 4s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
