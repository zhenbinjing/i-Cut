const webpack = require('webpack');
const path = require('path');
const sauce = require('../sauce.json');

function createCustomLauncher (browser, platform, version) {
	return {
		base: 'SauceLabs',
		browserName: browser,
		platform: platform,
		version: version
	};
}

var customLaunchers = {
	// Mobile
	sl_ios_9_safari: createCustomLauncher('iphone', null, '9.3'),
	sl_android_4_4: createCustomLauncher('android', null, '4.4'),
	// pc
	sl_mac_safari: createCustomLauncher('safari', 'OS X 10.11'),
	sl_mac_firefox: createCustomLauncher('firefox', 'Windows 7'),
	sl_mac_chrome: createCustomLauncher('chrome', 'Windows 7'),
	sl_ie_11: createCustomLauncher('internet explorer', 'Windows 7', '11'),
	sl_edge: createCustomLauncher('MicrosoftEdge', 'Windows 10')

};

var maxExecuteTime = 5*60*1000;

module.exports = function(config) {

	if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
		process.env.SAUCE_USERNAME = sauce.username;
		process.env.SAUCE_ACCESS_KEY = sauce.accesskey;
	}

	config.set({

    	// base path that will be used to resolve all patterns (eg. files, exclude)
    	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha','chai'],


	// list of files / patterns to load in the browser
	files: [
		'../test/e2e/index.js'
	],

	// list of files to exclude
	exclude: [],

	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'../test/e2e/index.js': ['webpack']
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['spec','coverage','coverage-istanbul','saucelabs'],

	webpack: {
        mode: 'production',
        module: {
            rules:[{
                    test: /\.js$/,
                    include: path.resolve('./test/e2e'),
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
		  dir: path.resolve(__dirname, '../coverage'),
		  'report-config': {
				html: {
				 subdir: './html'
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

	coverageReporter: {
        dir: '../coverage'
    },

	// web server port
	port: 9876,

	// enable / disable colors in the output (reporters and logs)
	colors: true,

	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,

	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,

	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	//browsers: ['PhantomJS'],

	sauceLabs: {
		public: 'public',
		recordVideo: false,
		recordScreenshots: false,
		testName: 'icut unit tests',
		build: 'build-' + Date.now()
	},

	customLaunchers: customLaunchers,
	browsers: Object.keys(customLaunchers),
	captureTimeout: maxExecuteTime,
	browserNoActivityTimeout: maxExecuteTime,
	retryLimit: 10, //为了保证都能运行这么多浏览器，必须添加重起的次数

	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity

	})
}
