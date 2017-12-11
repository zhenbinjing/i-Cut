var fs = require('fs');
var path = require('path')
var root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
var rm = require('rimraf');
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
	entry: path.join(root, 'v-src/main.js'),  // 入口文件路径
    output: {
    path: path.join(root, 'v-dist'),  // 出口目录
    filename: '[name].[chunkhash].js'  // 出口文件名
    }, 
	plugins: [
	 //提升变量作用域
	 new webpack.optimize.ModuleConcatenationPlugin(),
	 //压缩
	 new UglifyJsPlugin(),
	 //复制编辑html
	 new HtmlWebpackPlugin({
             template: path.join(root, 'v-src/index.html'), // 模板文件
             inject: 'body', // js的script注入到body底部
             minify: {
                   removeComments: true,
                   collapseWhitespace: true,
                   removeAttributeQuotes: true			
             }
     })
    ]
});	

//删除之前的文件
let emptyDir = function (fileUrl) {
	if (!fs.existsSync(fileUrl)) return;// 如果当前url不存在，则退出
    let files = fs.readdirSync(fileUrl);//读取该文件夹
    files.forEach(function (file) {
        let stats = fs.statSync(fileUrl + '/' + file);
        if (stats.isDirectory()) {
            emptyDir(fileUrl + '/' + file);
        } else {
            fs.unlinkSync(fileUrl + '/' + file);
            console.log("删除文件" + fileUrl + '/' + file + "成功");
        }
    });
};
emptyDir('./v-dist');