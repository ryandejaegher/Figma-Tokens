const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindFontSizes = Object.entries(defaultTheme.fontSize).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      value: value[0],
      attributes: {
        category: 'size',
      },
    };
    return acc;
  },
  {}
);

module.exports = {
  tailwind: {
    fontSize: {
      type: 'fontSizes',
      ...tailwindFontSizes,
    },
  },
};
