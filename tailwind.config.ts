import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animated";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      geist: ["Geist Mono", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "428px",
      sm: "640px",
      md: "768px",
      mdd: "1000px",
      base: "1280px",
      lg: "1440px",
      xl: "1600px",
      "2xl": "1736px",
      "3xl": "1920px",
      "4xl": "2240px",
    },
    extend: {
      boxShadow: {
        "black-01":
          "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
      },
      backgroundImage: {
        "gradient-light":
          "radial-gradient(63.86% 63.86% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "gradient-violet-light":
          "radial-gradient(63.86% 63.86% at 50% 50%, rgba(119, 97, 203, 0) 0%, rgba(119, 97, 203, 0.4) 100%)",
        "gradient-violet":
          "radial-gradient(63.95% 63.95% at 50% -5.23%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 68.19%), radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 68.19%), linear-gradient(360deg, #6F54E1 0%, #886AF9 100%)",
        "gradient-violet-2":
          "radial-gradient(63.86% 63.86% at 50% 50%, rgba(119, 97, 203, 0) 0%, rgba(119, 97, 203, 0.1) 100%);",
        "landing-page": "url('/blog/landing-page.jpg')",
        "section-bg-1": "url('/bg-section-1/L1.webp')",
        "section-bg-2": "url('/bg-section-1/L2.webp')",
      },
      maxWidth: {
        container: "1440px",
      },
      colors: {
        primary: "#163300",
        error: "#FF3D3D",
        rhino: "#7780A1",
        darkGray: "#202225",
        gray: "#2F3136",
        lightGray: "#9CA1AF",
        strong: "#161B12",
        "green-50": "#F6FDF1",
        darkGreen: "#163300",
        textGreen: "#9FE870",
        "wellnessty-peach": "#F9E7E3",
        "wellnessty-yellow": "#FDD85D",
      },
      borderColor: {
        DEFAULT: "#E3E8EA",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    tailwindcssAnimate,
    //   function ({ addUtilities }: import("tailwindcss/types/config").PluginAPI) {
    //     const newUtilities = {
    //       ".text-gaming-gradient": {
    //         background: "linear-gradient(90deg, #FFFFFF 0%, #BFC7FD 100%)",
    //         "-webkit-background-clip": "text",
    //         "-webkit-text-fill-color": "transparent",
    //         "background-clip": "text",
    //         "text-fill-color": "transparent",
    //       },
    //       ".text-primary-gradient": {
    //         background:
    //           "linear-gradient(194.48deg, #FFFFFF -5.04%, #A9EE9B 178.26%)",
    //         "-webkit-background-clip": "text",
    //         "-webkit-text-fill-color": "transparent",
    //         "background-clip": "text",
    //         "text-fill-color": "transparent",
    //       },
    //     };
    //     addUtilities(newUtilities, ["responsive", "hover"]);
    //   },
  ],
};
export default config;
