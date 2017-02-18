'use strict';
let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let srcDir = path.resolve(process.cwd(), 'dist');

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
	entry: getEntry(),	
	output: {
        path: path.join(__dirname, "dist/js/"),
        filename: "[name].js"
		},   
	resolve: {},
	module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: [["es2015", { "modules": false, "loose": true }]]
                }
            }
        ]
    },
	 plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
