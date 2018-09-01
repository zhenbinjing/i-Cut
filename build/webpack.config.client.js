const rm = require('rimraf')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const config = require('./config')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production';
  rm(config.route.dist, err => {
    if (err) throw err
    console.log('delete build file...')
  })
}
else {
  moshi = 'development'
};

const configs = merge(base, {
  mode: moshi,
  entry: [
    'promise-polyfill/src/polyfill',
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

module.exports = configs
