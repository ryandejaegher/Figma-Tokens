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

const tailwindLineHeight = Object.entries(defaultTheme.lineHeight).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      value: value,
      type: 'lineHeight',
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
    lineHeight: {
      type: 'lineHeights',
      // ...tailwindLineHeight,
      value: 100,
    },
  },
};
