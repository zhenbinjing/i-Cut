//npm install gulp-concat gulp-imagemin imagemin-pngquant gulp-cache gulp-minify-css gulp-uglify gulp-jshint gulp-replace gulp-processhtml gulp-htmlmin --save-dev
var gulp = require('gulp');
var concat = require('gulp-concat');						//- 多个文件合并为一个
var imagemin = require('gulp-imagemin'); 					//- 图片压缩
var pngquant = require('imagemin-pngquant');					//- 深度压缩png插件
var cache = require('gulp-cache');						//- 只压缩修改的图片，没有修改的图片直接从缓存文件读取
var minifyCss = require('gulp-minify-css');					//- 压缩CSS为一行
var uglify = require('gulp-uglify');						//- js合并压缩
var jshint = require('gulp-jshint');						//- js检测
var replace = require('gulp-replace');						//- 文本替换
var processhtml = require('gulp-processhtml');					//- html更改模板
var htmlmin = require('gulp-htmlmin');						//- html压缩

var y_Dz="src";
var y_Sz="dist";

gulp.task('imagemin', function () {
	gulp.src('./'+y_Dz+'/img/*.{png,jpg,gif,ico}')
		 .pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],				//不要移除svg的viewbox属性
		use: [pngquant()]						//使用pngquant深度压缩png图片的imagemin插件
		}))
		.pipe(gulp.dest('./'+y_Sz+'/img'));				//-输出路径
});

gulp.task('concat', function() {							 //- 创建一个名为 concat 的 task
	var date = new Date().getTime();					//- 创建版本时间	
	gulp.src(['./'+y_Dz+'/css/*.css'])						//- 需要处理的css文件，放到一个字符串数组里
	.pipe(replace(/_VERSION_/gi, date))								
	.pipe(concat('index.css'))						//- 合并后的文件名
	.pipe(minifyCss({compatibility: 'ie8', keepBreaks:false}))		//- 压缩处理成一行,兼容ie		
	.pipe(gulp.dest('./'+y_Sz+'/css'));					//- 输出文件本地
	
});
 
gulp.task('jsmin', function () {							//合并多个文件
	gulp.src(['./'+y_Dz+'/js/*.js'])						//多个文件以数组形式传入
	.pipe(uglify())
	.pipe(concat('index.js'))  
	.pipe(gulp.dest('./'+y_Sz+'/js'));
});

gulp.task('jshint', function() {							//检查文件
	gulp.src('./'+y_Sz+'/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));						//检查错误
});

gulp.task('processhtml', function () {
	var date = new Date().getTime();
	gulp.src('./'+y_Dz+'/*.html')
	.pipe(replace(/_VERSION_/gi, date))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Sz+'/'));
});

gulp.task('htmlys', function () {							//需要时单独执行
	var options = {
		removeComments: true,					//清除HTML注释
		collapseWhitespace: true,					//压缩HTML
		minifyJS: true,							//压缩页面JS
		minifyCSS: true							//压缩页面CSS
	};
	gulp.src('./'+y_Sz+'/*.html')						//压缩页面路径
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./'+y_Sz+'/'));					//输出路径
});

//执行插件函数
gulp.task('default', ['concat','imagemin','jsmin','jshint','processhtml']);