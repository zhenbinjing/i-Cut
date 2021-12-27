const config = require('./config')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const TerserPlugin = require("terser-webpack-plugin")


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
  optimization:{
    minimize: true,
    minimizer: [new TerserPlugin({  test: /\.js(\?.*)?$/i,})],
    runtimeChunk:'single',
    splitChunks:{
        cacheGroups:{
            vendor:{
                test:/[\\/]node_modules[\\/]/,
                name:'vendor',
                chunks:'all'
            }
        }
    },
    usedExports:true
},
  plugins: []
});

  webpackConfig.entry.push(
    config.route.app
  )

module.exports = webpackConfig
