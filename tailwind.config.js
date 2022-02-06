const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      colors: {
        "light-blue": colors.sky,
        cyan: colors.cyan,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.gray.800"),
              fontSize: "1.1em",
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.blue.500"),
              },
              strong: {
                color: theme("colors.gray.600"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.600"),
              },
              blockquote: {
                color: theme("colors.gray.600"),
                borderLeftColor: "rgb(var(--color-accent))",
              },
              "h1,h2,h3,h4,h5,h6": {
                color: theme("colors.gray.600"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
                fontSize: "0.7em",
                maxWidth: "90vw",
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.300"),
              fontWeight: 300,
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.blue.500"),
              },
              strong: {
                color: theme("colors.gray.300"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.500"),
              },
              blockquote: {
                color: theme("colors.gray.300"),
                borderLeftColor: theme("colors.gray.600"),
              },
              "h1,h2,h3,h4,h5,h6": {
                color: theme("colors.gray.300"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
                fontSize: "0.7em",
                maxWidth: "90vw",
              },
              // fontSize: "0.8rem",
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
};
