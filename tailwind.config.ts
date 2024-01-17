import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          main: "#F6F8FB",
          secondary: "#8D448B",
          white: "#E5E5E5",
          lightblue: "#F0FBFF",
          maintext: "#0F2137",
          secondarytext: "#343D48",
          ligthgrey: "#B5C3CB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
