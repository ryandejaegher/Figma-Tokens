const colors = require('tailwindcss/colors');

module.exports = {
  'colorTheme/themeB': {
    type: 'color',
    color: {
      light: {
        primary: colors.green,
        secondary: colors.yellow,
        neutral: colors.neutral,
        semantic: {
          success: colors.green[500],
          warning: colors.yellow[500],
          danger: {
            value: colors.red[500],
            type: 'color',
            comment: "Yo it's dangerous",
          },
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
