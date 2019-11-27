const { presets, plugins, exclude } = require('../../../babel.config')

module.exports = {
  test: /\.(js|ts|tsx)$/,
  exclude,
  use: {
    loader: 'babel-loader',
    options: {
      presets,
      plugins,
    },
  },
}
