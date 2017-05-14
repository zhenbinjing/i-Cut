'use strict';
let path = require('path');
let fs = require('fs');
let BabiliPlugin = require("babili-webpack-plugin");
let srcDir = path.resolve(process.cwd(), 'src');

function getEntry() {
	var jsPath = path.resolve(srcDir, 'js/es6');
	var dirs = fs.readdirSync(jsPath);
	var matchs = [], files = {};
	dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
		files[matchs[1]] = path.resolve(srcDir, 'js/es6', item);
	}
	});
	console.log(JSON.stringify(files));
	return files;
}

module.exports = {
	cache: true,
	devtool: "false", 
	entry: getEntry(),	
	output: {
        path: path.join(__dirname, "../src/js/es6/build"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
	},   
	resolve: {},	
	plugins: [
		new BabiliPlugin()
	]
};
