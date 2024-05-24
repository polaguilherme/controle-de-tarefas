/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Gray-100": "#F2F2F2",
        "Gray-200": "#D9D9D9",
        "Gray-300": "#808080",
        "Gray-400": "#333",
        "Gray-500": "#262626",
        "Gray-600": "#1A1A1A",
        "Gray-700": "#0D0D0D",
        "Blue-dark": "#1E6F9F",
        "Blue-primary": "#4EA8DE",
        "Purple-primary": "#8284FA",
      },
    },
  },
  plugins: [],
};
