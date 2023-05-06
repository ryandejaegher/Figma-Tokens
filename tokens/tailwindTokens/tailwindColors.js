const colors = require('tailwindcss/colors');

module.exports = {
  tailwind: {
    color: {
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
};
