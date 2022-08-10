module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontSize: {
        'h1-fz': ['48px', '72px'],
        'h2-fz': ['40px', '60px'],
        'h3-fz': ['32px', '30px'],
        'h4-fz': ['24px', '36px'],
        'h5-fz': ['20px', '30px'],
        'p-fz': ['16px', '24px'],
        'p-sm-fz': ['16px', '22px'], /* 關於我們跟 copyright 的字體 */
        'p-xs-fz': ['16px', '19px'], /* Nav 的字體 */
      },
      colors: {
        'true-gray-500': '#737272',
        'true-gray-800': '#222222',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}