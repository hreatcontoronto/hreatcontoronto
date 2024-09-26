/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '450px',
      sm: '540px',
      md: '768px',
      lg: '1300px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
