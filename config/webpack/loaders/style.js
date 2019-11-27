const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = process.env.NODE_ENV
const isDev = env === 'development'
const cssModulesClassMask = isDev
  ? '[path]__[name]__[local]__[hash:base64:5]'
  : '[hash:base64:5]'

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: isDev,
    modules: {
      localIdentName: cssModulesClassMask,
    },
  },
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: isDev,
  },
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: isDev,
    plugins: () => [autoprefixer()],
  },
}

const SASSResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: ['./src/ui/assets/vars.scss', './src/ui/assets/mixins.scss'],
  },
}

const getStyleLoaders = withModules => {
  const cssLoader = withModules ? CSSModuleLoader : CSSLoader

  const loaders = [MiniCssExtractPlugin.loader]

  if (withModules) loaders.push('css-modules-typescript-loader')

  return loaders.concat([
    cssLoader,
    'resolve-url-loader',
    postCSSLoader,
    'sass-loader',
    SASSResourcesLoader,
  ])
}

module.exports = [
  {
    test: /\.scss$/,
    exclude: /\.module\.scss$/,
    use: getStyleLoaders(),
  },
  {
    test: /\.module\.scss$/,
    use: getStyleLoaders(true),
  },
  {
    test: /\.less$/,
    use: [MiniCssExtractPlugin.loader, CSSLoader, 'less-loader'],
  },
]
