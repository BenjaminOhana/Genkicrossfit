/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        wine: '#7A1F2E', // Reverted to the elegant wine from the brand guidelines
        wineDark: '#4A121A', // Adjusted darker shade for gradients
        cream: '#F5F5F0',
        gray: {
          DEFAULT: '#E8E8E8',
        }
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        cta: '0.1em',
      }
    },
  },
  plugins: [],
}
