const colors = require('tailwindcss/colors');

module.exports = {
  'colorTheme/themeA': {
    color: {
      light: {
        primary: colors.blue,
        secondary: colors.pink,
        neutral: colors.neutral,
        semantic: {
          success: colors.green[500],
          warning: colors.yellow[500],
          danger: colors.red[500],
        },
      },
      dark: {
        primary: colors.blue,
        secondary: colors.pink,
        neutral: colors.neutral,
        semantic: {
          success: colors.green[500],
          warning: colors.yellow[500],
          danger: colors.red[500],
        },
      },
    },
  },
};
