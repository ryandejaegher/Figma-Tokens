const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindFontFamily = Object.entries(defaultTheme.fontFamily);
const tailwindBorderWidth = Object.entries(defaultTheme.borderWidth);
const tailwindBorderRadius = Object.entries(defaultTheme.borderRadius);

const fontFamilyObj = tailwindFontFamily.reduce((acc, [key, value], index) => {
  acc[key] = {
    value: value,
  };
  return acc;
}, {});

// TODO move to border settings file
const borderWidthObj = tailwindBorderWidth.reduce(
  (acc, [key, value], index) => {
    acc[key] = {
      value: value,
    };
    return acc;
  },
  {}
);

const borderRadiusObj = tailwindBorderRadius.reduce(
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
    borderWidth: {
      type: 'borderWidth',
      ...borderWidthObj,
    },
    borderRadius: {
      type: 'borderRadius',
      ...borderRadiusObj,
    },
  },
};
