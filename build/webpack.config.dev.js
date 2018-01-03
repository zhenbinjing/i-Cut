var path = require('path')
var root = path.resolve(__dirname, '..')
var webpack = require('webpack')
var merge = require('webpack-merge') //合并执行任务
var baseConfig = require('./webpack.config.base')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 这个插件能够更好的在终端看到webpack运行时的错误和警告等信息。可以提升开发体验。
var portfinder =require('portfinder'); // 查找一个未使用的端口
const utils = require('./utils') // 消息传送

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseConfig, {	
    entry: {
        app: path.join(root, 'v-src/main.js') // 入口文件路径
    },
    output: {
    path: path.join(root, 'v-dist'),  // 出口目录
    filename: 'static/js/app.js'  // 出口文件名
    },
    devServer:{        
        //是否不输出日记
        quiet: true,
        host: HOST || 'localhost',
        port: PORT || 8080,
    },
    plugins: [     
    new webpack.DefinePlugin({
        'process.env': require('../config/dev.env')
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
  