const glob = require('glob-all')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const HTMLPlugin = require('html-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
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
    publicPath: config.route.ssrPath,
    filename: config.file.outputJsName,
    chunkFilename: config.file.outputJsName
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    //删除没用的css
    new PurgecssPlugin({
      paths: glob.sync(config.plugin.purgecss)
    }),
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
    new GenerateJsonPlugin('static/pwa/manifest.json',
      {
        'name': 'VUEPWA',
        'short_name': 'VUEPWA',
        'icons': [
          {
            'src': config.route.ssrPath + 'static/pwa/icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': config.route.ssrPath + 'static/pwa/icons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'start_url': '/vr1',
        'display': 'standalone',
        'background_color': '#000000',
        'theme_color': '#4DBA87'
      },
      (key, value) => {
        if (value === 'VUEPWA') {
          return 'VUEPWA';
        }
        return value;
      },
      2
    )
  ]
});

module.exports = configs
