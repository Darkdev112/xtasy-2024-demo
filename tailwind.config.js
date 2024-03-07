/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '640px',
      'lg': '1024px',
    },
    extend: {
      backgroundImage : {
        'paper' : "url('../../public/bg_paper.webp')" 
      },
      fontFamily : {
        'gilroy' : ['Gilroy','sans-serif'],
        'bayon' : ['Bayon','sans-serif'],
        'akira' : ['Akira', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
