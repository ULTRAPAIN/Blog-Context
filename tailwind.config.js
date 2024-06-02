/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0 25px 50px -12px rgba(255, 255, 255, 0.4)', // Adjust the values to mimic 2xl shadow with white color
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark', 'dark:hover'],
    },
  },
  plugins: [],

}

