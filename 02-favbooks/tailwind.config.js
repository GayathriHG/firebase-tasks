/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'body-pattern':"url('/public.bg-img.png')"
      }
    },
  },
  plugins: [],
}

