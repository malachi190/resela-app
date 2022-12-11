/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColorOne: '#8D66DC',
        bgColorTwo: '#9E7DE1',
        primaryColor: '#9747FF',
        catBg: ' #9E7DE1',
        showCaseBg: ' #8D66DC3D',
        purpleBg: ' #8D66DC',
        cardWhite: '#fff',
        linkColor: '#681ACC',
        textGray: '#808080',
        lightGray: '	#D3D3D3',
        darkPurple: '#9747FF'
      },
      backgroundImage: {
        heroImage: "url('./assets/hero-image.png')"
      }
    },
  },
  plugins:  [],
}
