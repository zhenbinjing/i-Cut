'use strict';
let path = require('path');
let fs = require('fs');
let srcDir = path.resolve(process.cwd(), 'src');
let nodeModulesPath = path.resolve(process.cwd(), 'node_modules');

function getEntry() {
	var jsPath = path.resolve(srcDir, 'js/es6/build');
	var dirs = fs.readdirSync(jsPath);
	var matchs = [], files = {};
	dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
		files[matchs[1]] = path.resolve(srcDir, 'js/es6/build', item);
	}
	});
	console.log(JSON.stringify(files));
	return files;
}

module.exports = {
	entry: getEntry(),	
	output: {
        path: path.join(__dirname, "src/js/es6/es5"),
        filename: "[name].js"
	},   
	resolve: {},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				babelrc: false,
				presets: [["es2015", { "modules": false, "loose": true }]]
			},
			include: [path.resolve(process.cwd(), 'src/js/es6/build')],		//把要处理的目录包括进来
			exclude: [nodeModulesPath]					//排除不处理的目录
		}]	
	}
};
