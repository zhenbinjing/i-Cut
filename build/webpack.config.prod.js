const config = require('./config')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')


const isLegacy = process.env.LEGACY === 'legacy' || process.env.MDLEGACY === 'mdlegacy' ? '@babel/polyfill' : '';

webpackConfig = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: [],
  output: {
    path: config.route.dist,  // 出口目录
    filename: config.file.outputJsName,  // 出口文件名
    chunkFilename: config.file.outputJsName,
    publicPath: config.route.publicPath //在github上预览(客户端渲染)
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
  },
  plugins: []
});

if(isLegacy){
  webpackConfig.entry.push(
    isLegacy,config.route.app
  )
}else{
  webpackConfig.entry.push(
    config.route.app
  )
}

module.exports = webpackConfig
