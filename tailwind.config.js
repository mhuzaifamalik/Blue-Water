/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
   keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
     colors: {
        brandBlue: '#43AAD6', // 👈 your custom color
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
           syne: ['Syne', 'sans-serif'],
      },
       animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      
}, 
},
plugins: [],
};