/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        softred: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        darkmoderatecyan: "hsl(168, 34%, 41%)",
        // neutral
        verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        verydarkgrayishblue: "hsl(213, 9%, 39%)",
        darkgrayishblue: "hsl(232, 10%, 55%)",
        grayishblue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: (theme) => ({
        // mobile
        "hero-image-mobile": "url('../src/images/mobile/image-header.jpg')",
        "orange-image-mobile": "url('../src/images/mobile/image-photography.jpg')",
        "apple-image-mobile": "url('../src/images/mobile/image-graphic-design.jpg')",
        // desktop
        "hero-image-desktop": "url('../src/images/desktop/image-header.jpg')",
        "orange-image-desktop": "url('../src/images/desktop/image-photography.jpg')",
        "apple-image-desktop": "url('../src/images/desktop/image-graphic-design.jpg')",
      }),
    },
  },
  plugins: [],
};
