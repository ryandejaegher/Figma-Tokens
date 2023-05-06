const colors = require('tailwindcss/colors');

module.exports = {
  'colorTheme/themeB': {
    light: {
      color: {
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
    dark: {
      color: {
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
