const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindFontWeights = Object.keys(defaultTheme.fontWeight);
console.log('weights', tailwindFontWeights);

const fontWeightObj = tailwindFontWeights.reduce((acc, key, index) => {
  acc[key] = {
    value: (index + 1) * 100,
  };
  return acc;
}, {});

module.exports = {
  tailwind: {
    fontWeights: {
      type: 'fontWeights',
      ...fontWeightObj,
    },
  },
};
