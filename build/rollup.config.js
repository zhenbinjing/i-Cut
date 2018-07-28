import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './test/es6/ts/main.js',
  output: {
    file: './test/es5/main.js',
    format: 'iife'
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    // amd – 使用像requirejs一样的银木块定义
    // cjs – CommonJS，适用于node和browserify / Webpack ,还有必须添加 moduleName 字段。
    // es6 (default) – 保持ES6的格式
    // iife – 使用于<script> 标签引用的方式
    // umd – 适用于CommonJs和AMD风格通用模式
  },
  plugins: [
    buble(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      externalHelpers: true
    }),
    uglify({
      //mangle: true
      //保留关键变量
      mangle: { reserved: ['tsa', 'TSA'] },
      toplevel: true
    })
  ]
};
