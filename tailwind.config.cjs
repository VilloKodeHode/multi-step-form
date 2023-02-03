/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#061F32",

          secondary: "#9DC1F7",

          accent: "#E0F4FD",

          richBlack: "#030104",

          neutral: "#DAF4F9",

          "base-100": "#87BDC2",

          info: "#22555C",

          success: "#22555C",

          warning: "#22555C",

          error: "white",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: { Ubuntu: ["Ubuntu", "sans-serif"] },
      colors: {
        design: {
          MarineBlue: "#02295A",
          PurplishBlue: "#473DFF",
          PastelBlue: "#ADBEFF",
          LightBlue: "#BFE2FD",
          StrawberryRed: "#ED3548",
          CoolGray: "#9699AB",
          LightGray: "#D6D9E6",
          Magnolia: "#F0F6FF",
          Alabaster: "#FAFBFF",
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
