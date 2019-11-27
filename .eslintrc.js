module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~/',
        rootPathSuffix: './src',
      },
    },
  },
}
