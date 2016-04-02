//npm install gulp gulp-concat gulp-imagemin imagemin-pngquant gulp-cache gulp-autoprefixer gulp-minify-css gulp-uncss font-spider gulp-uglify gulp-jshint gulp-replace gulp-processhtml gulp-htmlmin browser-sync --save-dev
var gulp = require('gulp');
var concat = require('gulp-concat');								//- 多个文件合并为一个
var imagemin = require('gulp-imagemin'); 							//- 图片压缩
var pngquant = require('imagemin-pngquant');							//- 深度压缩png插件
var cache = require('gulp-cache');								//- 只压缩修改的图片，没有修改的图片直接从缓存文件读取
var autoprefixer = require('gulp-autoprefixer');							//- 补充浏览器前缀
var minifyCss = require('gulp-minify-css');							//- 压缩CSS为一行
var uncss = require('gulp-uncss');								//- 删除没用到的css
var FontSpider = require('font-spider');								//- 删除没用到的字体
var uglify = require('gulp-uglify');								//- js合并压缩
var jshint = require('gulp-jshint');								//- js检测
var replace = require('gulp-replace');								//- 文本替换
var processhtml = require('gulp-processhtml');							//- html更改模板
var htmlmin = require('gulp-htmlmin');								//- html压缩
var browserSync = require('browser-sync');							//- 同步测试工具

var y_Dz="src";											//- 生产环境路径
var y_Sz="dist";											//- 上线环境路径

gulp.task('imagemin', function () {
	gulp.src('./'+y_Dz+'/img/*.{png,jpg,gif,ico}')
		.pipe(cache(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],					//- 不要移除svg的viewbox属性
			use: [pngquant()]							//- 使用pngquant深度压缩png图片的imagemin插件							
        })))
		.pipe(gulp.dest('./'+y_Sz+'/img'));						//- 输出路径
});

gulp.task('concat', function() {									//- 创建一个名为 concat 的 task
	var date = new Date().getTime();								//- 创建版本时间	
	gulp.src(['./'+y_Dz+'/css/*.css'])								//- 需要处理的css文件，放到一个字符串数组里	
		.pipe(replace(/_VERSION_/gi, date))							//- 文件指纹							
		.pipe(concat('index.css'))									//- 合并后的文件名
		.pipe(autoprefixer({
			browsers: [
			'last 2 version',										//- 主流浏览器的最新两个版本
			'ios 7',												//- IOS7版本
			'android 2.3',											//- android 2.3版本
			'Firefox >= 20',										//- 火狐浏览器的版本大于或等于20
			'last 2 Explorer versions'],							//- IE的最新两个版本
            cascade: true,											//- 是否美化属性值 默认：true 像这样：-webkit-transform: rotate(45deg); transform: rotate(45deg);
            remove:true 											//- 是否去掉不必要的前缀 默认：true 
		}))
		.pipe(uncss({
			html: ['./'+y_Dz+'/*.html'],							//- 检查的页面
			ignore: ['abc','.abc','#abc']			    			//- 忽略的标签 class or id or 分号隔开
		}))
		.pipe(minifyCss({compatibility: 'ie8', keepBreaks:false}))	//- 压缩处理成一行,兼容ie
		.pipe(gulp.dest('./'+y_Sz+'/css'));							//- 输出文件本地
	
});

gulp.task('jsmin', function () {									//- 合并多个文件
	gulp.src(['./'+y_Dz+'/js/*.js'])								//- 多个文件以数组形式传入
		.pipe(uglify())
		.pipe(concat('index.js'))  
		.pipe(gulp.dest('./'+y_Sz+'/js'));
});

gulp.task('jshint', function() {									//- 检查文件
	gulp.src('./'+y_Sz+'/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));							//- 检查错误
});

gulp.task('processhtml', function () {								//- 修改该html的dom
	var date = new Date().getTime();
	gulp.src('./'+y_Dz+'/*.html')
		.pipe(replace(/_VERSION_/gi, date))
		.pipe(processhtml())
		.pipe(gulp.dest('./'+y_Sz+'/'));
});

gulp.task('fs', function() {
	return FontSpider(['./'+y_Dz+'/*.html'],{						//- 删除多余的字体，添加return返回最终的数据流
			ignore:['']												//- 忽略的文件
	});		
});		
				
gulp.task('cp',['fs'],function () {									//- 先把fs命令执行完后，再去执行cp命令，fs需要添加return
	gulp.src(['./'+y_Dz+'/font/**'],{								//- 被复制的文件夹下的所有文件
            base: './'+y_Dz+'/font' 								//- 被复制的目标路径  
    })
		.pipe(gulp.dest('./'+y_Sz+'/font'));						//- 输出路径
});

/*-------------bs,html这两个命令是需要时手动执行-----------------*/

gulp.task('html', function () {										
	var options = {
		removeComments: true,										//- 清除HTML注释
		collapseWhitespace: true,									//- 压缩HTML
		minifyJS: true,												//- 压缩页面JS
		minifyCSS: true												//- 压缩页面CSS
	};
	gulp.src('./'+y_Sz+'/*.html')									//- 压缩页面路径
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./'+y_Sz+'/'));							//- 输出路径
	
});

gulp.task('bs', function() {
	browserSync({
		files: "**",												//- 监控所有文件
		server: {
			baseDir: './'+y_Dz+'/' 									//- 目标文件夹路径
        }
    });
});

//执行插件函数
gulp.task('default', ['concat','imagemin','jsmin','jshint','processhtml','cp']);

