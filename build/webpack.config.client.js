const path = require('path')
const glob = require('glob-all')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const HTMLPlugin = require('html-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const root = path.resolve(__dirname, '..')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production'
}
else {
  moshi = 'development'
};

const config = merge(base, {
  mode: moshi,
  entry: {
    app: './v-src/entry-client.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'v-src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../v-dist/'),
    publicPath: '/v-dist/',
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].js'
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
      paths: glob.sync([
        path.join(__dirname, './../v-src/index.html'),
        path.join(__dirname, './../**/*.vue'),
        path.join(__dirname, './../v-src/**/*.js')
      ])
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'v-src/index.template.html',
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
    })
  ]
});

module.exports = config
