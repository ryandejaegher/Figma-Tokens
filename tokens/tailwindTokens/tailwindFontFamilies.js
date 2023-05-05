const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindFontFamily = Object.entries(defaultTheme.fontFamily);
const tailwindBorderWidth = Object.entries(defaultTheme.borderWidth);

const fontFamilyObj = tailwindFontFamily.reduce((acc, [key, value], index) => {
  acc[key] = {
    value: value,
  };
  return acc;
}, {});

const borderWidthObj = tailwindBorderWidth.reduce(
  (acc, [key, value], index) => {
    acc[key] = {
      value: value,
    };
    return acc;
  },
  {}
);

module.exports = {
  tailwind: {
    fontFamily: {
      type: 'fontFamilies',
      ...fontFamilyObj,
    },
    border: {
      type: 'borderWidth',
      ...borderWidthObj,
    },
  },
};
