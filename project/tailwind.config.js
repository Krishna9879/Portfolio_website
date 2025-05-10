export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "neon-blue": "#00f7ff",
        "neon-purple": "#b537f2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #00f7ff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}