const glob = require('glob-all')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const HTMLPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const config = require('./config')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production'
}
else {
  moshi = 'development'
};

const configs = merge(base, {
  mode: moshi,
  entry: {
    app: config.route.clientapp
  },
  resolve: {
    modules: [config.route.src, 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: config.route.dist,
    publicPath: config.route.publicPath,
    filename: config.file.outputJsName,
    chunkFilename: config.file.outputJsName
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
    new CopyWebpackPlugin([
			{
				from: config.plugin.copy.from,
				to: config.plugin.copy.to,
				ignore: ['.*']
			}
		]),
    // generate output HTML
    new HTMLPlugin({
      template: config.route.ssrhtml,
      inject: 'body',
      filename: 'index.html',
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true
        // removeComments                 : true, // ACK. This strips out the <!-- vue-ssr-outlet--> DO NOT USE.
        // minifyCSS                      : true,
        // minifyJS                       : true,
        // minifyURLs                     : false,
        // removeAttributeQuotes          : true,
        // removeEmptyAttributes          : true,
        // removeOptionalTags             : true,
        // removeStyleLinkTypeAttributes  : true,
        // useShortDoctype                : true
      }
    }),
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
  ]
});

module.exports = configs
