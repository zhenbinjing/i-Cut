import minify from 'rollup-plugin-babel-minify';
//import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: './src/js/es6/main.js',
  dest: './src/js/es6/ts/main.js',	
  format: 'es',
//moduleName: 'icut', 
//sourceMap: 'true',
  plugins: [ 
	minify()
	//resolve({ jsnext: true, main: true, browser: true, }), 
	//commonjs()
  ],
};
