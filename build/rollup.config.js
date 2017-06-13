import babili from 'rollup-plugin-babili';
//import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: './src/js/es6/main.js',
  dest: './src/js/es6/ts/main.js',
	// output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
	// amd – 使用像requirejs一样的银木块定义
	// cjs – CommonJS，适用于node和browserify / Webpack ,还有必须添加 moduleName 字段。
	// es6 (default) – 保持ES6的格式
	// iife – 使用于<script> 标签引用的方式
	// umd – 适用于CommonJs和AMD风格通用模式
  format: 'es6',
	//moduleName: 'icut', 
	//sourceMap: 'true',
  plugins: [ 
	babili(),
	//resolve({ jsnext: true, main: true, browser: true, }), 
	//commonjs()
  ],
};
