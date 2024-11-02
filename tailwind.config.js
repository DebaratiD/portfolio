/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading:'var(--text-heading)',
        paragraph:'var(--text-paragraph)',
        primary:'var(--background-primary)',
        secondary:'var(--background-secondary)',
        accent:'var(--background-accent)',
        cardbg:'var(--background-card)',
        line: 'var(--color-lines)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark":"url('/dark1.jpg')",
        "stars":"url('/stars.jpg')",
        animation: {
          spinslow: 'spin 1.5s linear 1',
                  }
      },
    },
  },
  plugins: [],
};
