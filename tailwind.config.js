/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    container:{
center:true,
screens:{

  'sm': '640px',
  // => @media (min-width: 640px) { ... }

  'sm': '600px',
  'md': '728px',
  'lg': '964px',
  'xl': '1100px',
  '2xl': '1436px',

}
    },
    extend: {
      colors:{
        primary:"#0aad0a"
      }
    },
  },
  plugins: [],
}

