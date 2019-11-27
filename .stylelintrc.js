module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: [
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    'prettier/prettier': true,
  },
}
