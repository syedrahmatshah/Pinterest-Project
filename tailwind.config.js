/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0)", opacity: "1" }, // starting & ending point
          "25%": { transform: "translateY(-10px)", opacity: "0" },
          "50%": { transform: "translateY(-40px)", opacity: "1" }, // highest point
          "75%": { transform: "translateY(-40px)", opacity: "1" },
          "100%": { transform: "translateY(-40px)", opacity: "1" },
        },
        bouncing: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wiggleSlow: "wiggle 2s ease-in-out forwards",
        wiggleMedium: "wiggle 2.5s ease-in-out forwards",
        wiggleFast: "wiggle 3s ease-in-out forwards",
        wiggleSlowAfter: "wiggle 5s ease-in-out forwards",
        wiggleMediumAfter: "wiggle 4.5s ease-in-out forwards",
        wiggleFastAfter: "wiggle 4s ease-in-out forwards",
        bouncingDropDown: "bouncing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
