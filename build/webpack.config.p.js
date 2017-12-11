'use strict';
let webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let path = require('path');
let fs = require('fs');
let srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
	var jsPath = path.resolve(srcDir, 'js');
	var dirs = fs.readdirSync(jsPath);
	var matchs = [], files = {};
	dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
		files[matchs[1]] = path.resolve(srcDir, 'js', item);
	}
	});
	console.log(JSON.stringify(files));
	return files;
}

module.exports = {
	cache: true,
	devtool: "false", //添加.map文件调试 source-map
	entry: getEntry(),
	output: {
        path: path.join(__dirname, "../dist/js"),
        //publicPath: "dist/js", 上线路径  https：//...
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
	},   
	resolve: {
		extensions: ['.js'],				//匹配文件格式
		modules: [srcDir,'node_modules'],		//运行加载器的时候，指定搜索的目录。
		alias: {
		//配置别名，在项目中可缩减引用路径
		//jquery: srcDir + "/js/lib/jquery.min.js",
		}          
	},	
	plugins: [	
		//提升变量作用域
		new webpack.optimize.ModuleConcatenationPlugin(),
		
		//将公共代码抽离出来合并为一个文件		
		//new webpack.optimize.CommonsChunkPlugin({
		//	name: "commons",0
		//	filename: "commons.js",
		//}),
		
		//压缩
		new UglifyJsPlugin()
		
		//提供全局的变量，在模块中使用无需用require引入
		//new webpack.ProvidePlugin({
        	//    jQuery: "jquery",
        	//    $: "jquery",
		//}),
		]
};
