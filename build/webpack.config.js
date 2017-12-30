var path = require('path')
var root = path.resolve(__dirname, '..')
var webpack = require('webpack')
var merge = require('webpack-merge') //合并执行任务
var baseConfig = require('./webpack.config.base')
//这个插件能够更好的在终端看到webpack运行时的错误和警告等信息。可以提升开发体验。
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// 查找一个未使用的端口
var portfinder =require('portfinder');

module.exports = merge(baseConfig, {	
    entry: path.join(root, 'v-src/main.js'),  // 入口文件路径
    output: {
    path: path.join(root, 'v-dist'),  // 出口目录
    filename: 'static/js/main.js'  // 出口文件名
    },
    devServer:{        
        //是否不输出日记
        quiet: true
    },
    plugins: [     
    new webpack.DefinePlugin({
        'process.env': require('../config/prod.env')
    }),     
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()    
    ]	
});

portfinder.getPort(function (err, port) {
    if (!err) {
      console.log('打开浏览器输入：http://localhost:', port)
    } else {
      console.log('err', err)
    }
  })