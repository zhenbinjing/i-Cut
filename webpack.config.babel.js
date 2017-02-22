'use strict';
let path = require('path');
let fs = require('fs');
let srcDir = path.resolve(process.cwd(), 'dist');
let nodeModulesPath = path.resolve(process.cwd(), 'node_modules');

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
        path: path.join(__dirname, "dist/js"),
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
			include: [path.resolve(process.cwd(), 'dist/js')],
			exclude: [nodeModulesPath]
		}]	
	}
};
