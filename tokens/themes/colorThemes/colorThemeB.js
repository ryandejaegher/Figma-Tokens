const colors = require('tailwindcss/colors');

module.exports = {
  'colorTheme/themeB': {
    color: {
      light: {
        primary: colors.green,
        secondary: colors.yellow,
        neutral: colors.neutral,
        semantic: {
          success: colors.green[500],
          warning: colors.yellow[500],
          danger: colors.red[500],
        },
      },
      dark: {
        primary: colors.green,
        secondary: colors.yellow,
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
