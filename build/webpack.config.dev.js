const fs = require('fs')
const path = require('path')
const config = require('./config')
const webpack = require('webpack')
const merge = require('webpack-merge') //合并执行任务
const baseConfig = require('./webpack.config.base')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 这个插件能够更好的在终端看到webpack运行时的错误和警告等信息。可以提升开发体验。
const portfinder = require('portfinder'); // 查找一个未使用的端口
const utils = require('./utils') // 消息传送
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: config.route.app // 入口文件路径
  },
  output: {
    path: config.route.dist,  // 出口目录
    filename: config.file.devJsName,  // 出口文件名
    publicPath: '/'
  },
  devServer: {
    //是否不输出日记
    quiet: true,
    host: HOST || 'localhost',
    port: PORT || 8080,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.route.html, // 模板文件
      inject: 'body',
      serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
        './service-worker-dev.js'), 'utf-8')}</script>`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: true
          ? utils.createNotifierCallback()
          : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
