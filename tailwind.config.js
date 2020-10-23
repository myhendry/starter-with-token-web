module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
      },
    },
  },
  variants: {},
  plugins: [],
}
