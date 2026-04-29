const colors = require("tailwindcss/colors")

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './src/pages/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        slate: colors.slate,
        stone: colors.stone,
        neutral: colors.neutral,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      extend: {}
    }
}