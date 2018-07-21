const path = require('path')
const glob = require('glob-all')
const config = require('./config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
//const PrerenderSPAPlugin = require('prerender-spa-plugin') // 页面静态化
//const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const webpackConfig = merge(baseConfig, {
	mode: 'production',
	devtool: '#source-map',
	entry: [
		'babel-polyfill', config.route.app // 入口文件路径
	],
	output: {
		path: config.route.dist,  // 出口目录
		filename: config.file.outputJsName,  // 出口文件名
		chunkFilename: config.file.outputJsName,
		publicPath: config.route.publicPath //在github上预览(客户端渲染)
		//publicPath: '/' //在本地上预览(静态化PrerenderSPAPlugin)
	},
	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					priority: -20,
					chunks: "all"
				}
			}
		}
	},
	plugins: [
		//删除没用的css
		new PurgecssPlugin({
			paths: glob.sync(config.plugin.purgecss)
		}),
		//缓存
		new webpack.HashedModuleIdsPlugin(),
		new HtmlWebpackPlugin({
			template: config.route.html, // 模板文件
			inject: 'body',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				minifyJS: true
			},
			chunksSortMode: 'dependency'
		}),
		new CopyWebpackPlugin([
			{
				from: config.plugin.copy.from,
				to: config.plugin.copy.to,
				ignore: ['.*']
			}
		]),
		new WorkboxPlugin.GenerateSW({
			cacheId: 'vue-pwa', // 设置前缀
			skipWaiting: true, // 强制等待中的 Service Worker 被激活
			clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
			swDest: 'service-worker.js', // 输出 Service worker 文件
			runtimeCaching: [
				// 配置路由请求缓存 对应 workbox.routing.registerRoute
				{
					urlPattern: /.*\.js/, // 匹配文件
					handler: 'networkFirst' // 网络优先
				},
				{
					urlPattern: /.*\.css/,
					handler: 'staleWhileRevalidate', // 缓存优先同时后台更新
					options: {
						// 这里可以设置 cacheName 和添加插件
						plugins: [
							{
								cacheableResponse: {
									statuses: [0, 200]
								}
							}
						]
					}
				},
				{
					urlPattern: /.*\.(?:png|jpg|jpeg|webp|svg|gif)/,
					handler: 'cacheFirst', // 缓存优先
					options: {
						plugins: [
							{
								expiration: {
									maxAgeSeconds: 24 * 60 * 60, // 最长缓存时间,
									maxEntries: 50 // 最大缓存图片数量
								}
							}
						]
					}
				},
				{
					urlPattern: /.*\.html/,
					handler: 'networkFirst'
				}
			]
		})
		/*new PrerenderSPAPlugin({
		staticDir:config.route.dist,
		routes:[ '/','/vr1', '/axios', '/vuex' ],
		renderer: new Renderer({
		headless: false,
		renderAfterTime: 5000  //先加载json,让程序运行5秒之后,再捕获渲染后的数据行为(axios)
		})
		})*/
	]
});
module.exports = webpackConfig
