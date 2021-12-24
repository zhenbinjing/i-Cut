﻿const config = require('./config')
const { merge } = require('webpack-merge') //合并执行任务
const baseConfig = require('./webpack.config.base')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') // 这个插件能够更好的在终端看到webpack运行时的错误和警告等信息。可以提升开发体验。
const portfinder = require('portfinder'); // 查找一个未使用的端口
const packageConfig = require('../package.json')


const devWebpackConfig = merge(baseConfig, {
  target: 'web',
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: config.route.app // 入口文件路径
  },
  output: {
    path: config.route.dist,  // 出口目录
    filename: config.file.devJsName,  // 出口文件名
    publicPath: config.route.publicPath
  },
  devServer: {
    port: 8080,
    open: true
  }
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
          ? createNotifierCallback()
          : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})

// 报错消息传送
function createNotifierCallback() {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: config.icon.src
    })
  }
}
