var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry:[ //接入
	"./src/js/scrollLoad.js",
	"./src/js/ts.js" 
	],
    output:{//产出
        path:path.join(__dirname, "./dist/js"),
        filename:"index.js"
	},
    plugins:[ //插件区
	new webpack.optimize.UglifyJsPlugin({//压缩js  
        compressor:{warnings:false}
	}) 
	]
};