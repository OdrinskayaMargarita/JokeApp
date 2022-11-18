module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      borderWidth: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        DEFAULT: '1px',
      },
      colors: {
        black: '#000000',
        grey: '#E6E6E6',
        darkGrey: '#C1C3C6',
        purple: '#9763FF',
        white: '#ffffff',
      },
      lineHeight: {
        '140': '1.4',
      },
      spacing: {},
    },
  },
};
