var path = require('path')
var root = path.resolve(__dirname, '..')
var webpack = require('webpack')
var merge = require('webpack-merge') //合并执行任务
var baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {	
    entry: path.join(root, 'v-src/main.js'),  // 入口文件路径
    output: {
    path: path.join(root, 'v-dist'),  // 出口目录
    filename: 'main.js'  // 出口文件名
    },
    plugins: [       
		new webpack.HotModuleReplacementPlugin()		
    ]	
});
