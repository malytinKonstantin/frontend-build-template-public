// config for css modules

// module.exports = {
//   plugins: ['stylelint-scss', 'stylelint-prettier'],
//   extends: [
//     'stylelint-config-prettier',
//     'stylelint-prettier/recommended',
//     'stylelint-config-recommended-scss',
//   ],
//   rules: {
//     'prettier/prettier': true,
//   },
// }

// config for css modules

module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-prettier",
    "stylelint-prettier/recommended",
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  rules: {
    "prettier/prettier": true
  }
};
