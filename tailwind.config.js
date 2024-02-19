/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linearGradient: "hsl(249, 99%, 64%) hsl(278, 94%, 30%)",
        red: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
      },

      fontFamily: {
        mainFont: ["Space Grotesk", "sans-serif"],
      },

      backgroundImage: {
        bgMainDesktop: "url('/imgs/bg-main-desktop.png')",
        bgMainMobile: "url('/imgs/bg-main-mobile.png')",
        cardLogo: "url('/imgs/card-logo.svg')",
      },
    },
  },
  plugins: [],
};
