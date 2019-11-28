const isTestsEnv = process.env.NODE_ENV === 'test'
const isDev = process.env.NODE_ENV === 'development'

const babelPugins = [
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: true,
    },
  ],
]

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTestsEnv ? 'commonjs' : false,
        loose: true,
        targets: {
          browsers: ['last 2 versions', 'safari > 8', 'not ie < 11'],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-async-generator-functions',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-classes', { loose: true }],
    '@babel/plugin-transform-arrow-functions',
    [
      'babel-plugin-styled-components',
      {
        minify: !isDev,
        transpileTemplateLiterals: !isDev,
        displayName: isDev,
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
            plugins: ['postcss-nested'],
          },
        },
      },
    ],
    ...(isTestsEnv ? [] : babelPugins),
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
        ],
      },
    ],
    '@babel/plugin-proposal-optional-catch-binding',
  ],
}
