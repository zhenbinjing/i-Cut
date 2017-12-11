var path = require('path')
var root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
        alias: {
             'vue': 'vue/dist/vue.js'
        }
  },
  module: { // 配置loader
        loaders: [
               {test: /\.vue$/, loader: 'vue-loader'}, // 所有.vue结尾的文件，使用vue-loader
               {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/} // .js文件使用babel-loader，切记排除node_modules目录
  ]},
  plugins: [
	 //复制编辑html
	 new HtmlWebpackPlugin({
             template: path.join(root, 'v-src/index.html'), // 模板文件
             inject: 'body' // js的script注入到body底部            
     })
    ]
}