import buble from 'rollup-plugin-buble';

export default {
  entry: './src/js/function/main.js',
  dest: './dist/js/function/index.js',
  format: 'iife',
  //moduleName: 'jQuery',
  //sourceMap: 'true',
  plugins: [    
    buble(),
  ],
};