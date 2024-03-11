/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': 'url(/src/frontend/assets/background.jpeg)',
        'app-logo': 'url(/public/logo.png)',
      },
    },
  },
  plugins: [],
}

