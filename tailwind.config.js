module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      smallerWide: '.1em',
      wide: '.025em',
      wider: '.6em',
      widest: '.68em',
    },

    extend: {
      width: {
        '3/20': '15%',
      },
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
      lineHeight: {
        'tighter': '1.2',
      },
      colors: {
        'true-gray-400': '#959493',
        'true-gray-500': '#737272',
        'true-gray-700': '#404040',
        'true-gray-800': '#222222',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      zIndex: {
        '2': '2',
        '5': '5',
      },
      spacing: {
        '7.5': '1.875rem', /* 30px */
        '15': '60px',
        '160': '40rem',
        '7/25': '28%',
        '2/5': '40%',
        '11/25': '44%',
        '3/5': '60%',
        '61/100': '61%',
        '22/25': '88%',
        '23/25': '92%',
      },
      rotate: {
        '250': '250deg',
      },
      // backgroundImage: {
      //   'banner': "url('../../assets/images/banner-chicken.jpg')",
      // } 需使用 scale 而不影響字體變化，所以需要另起 css 套用偽元素
      keyframes: {
        spinAround: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinCustom: 'spinAround 1s ease-in-out backwards',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}