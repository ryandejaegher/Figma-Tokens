const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindSpacing = Object.entries(defaultTheme.spacing).reduce(
  (acc, [key, value]) => {
    console.log('value', value);
    acc[key] = {
      value: value,
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
    sizing: {
      type: 'sizing',
      ...tailwindSpacing,
    },
  },
};
