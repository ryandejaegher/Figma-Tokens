const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindFontFamily = Object.entries(defaultTheme.fontFamily);

const fontFamilyObj = tailwindFontFamily.reduce((acc, [key, value], index) => {
  acc[key] = {
    value: value,
  };
  return acc;
}, {});

module.exports = {
  tailwind: {
    fontFamily: {
      type: 'fontFamilies',
      ...fontFamilyObj,
    },
  },
};
