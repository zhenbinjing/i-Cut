var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {

	config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',

	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha','chai'],

	// list of files / patterns to load in the browser
	files: [
		'./src/js/e2e/index.js'
	],
	// list of files to exclude
	exclude: [],

	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'./src/js/e2e/index.js': ['webpack']
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['spec','coverage','coverage-istanbul'],
	  
	webpack: {
        module: {
            rules:[{
                    test: /\.js$/,
                    include: path.resolve('./src/js/e2e'),
                    loader: 'istanbul-instrumenter-loader'
                  },{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: { presets: ['env']}
                  }]   
		}
	},

	coverageIstanbulReporter: {       
		  reports: ['html', 'lcovonly', 'text-summary'],
		  dir: './coverage', 
		  'report-config': {
				html: {   
				 subdir: 'html'
				},
				lcovonly: {			
				 file: './coverage.lcov'
				},
			    'text-summary': {
          		file: null
        		}
		  },
		  fixWebpackSourcePaths: true		
	},

	// web server port
	port: 9876,

	// enable / disable colors in the output (reporters and logs)
	colors: true,

	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,

	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,

	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['MyHeadlessChrome'],
	customLaunchers: {
           MyHeadlessChrome: {
           base: 'ChromeHeadless',
           flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223']
           }
        },

	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity
	
  })
}