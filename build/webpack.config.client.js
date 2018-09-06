const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const config = require('./config')

const isLegacy = process.env.LEGACY === 'legacy' || process.env.MDLEGACY === 'mdlegacy' ? 'promise-polyfill/src/polyfill' : '';

const moshi = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const configs = merge(base, {
  mode: moshi,
  entry: [
    config.route.clientapp // 入口文件路径
  ],
  resolve: {
    modules: [config.route.src, 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: config.route.dist,
    publicPath: config.route.ssrPath,
    filename: config.file.outputJsName,
    chunkFilename: config.file.outputJsName
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
});

if (isLegacy) {
  configs.entry.push(isLegacy)
}

module.exports = configs
