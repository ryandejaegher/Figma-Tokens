const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindSpacing = Object.entries(defaultTheme.spacing).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      value: value,
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
    spacing: {
      type: 'spacing',
      ...tailwindSpacing,
    },
  },
};
