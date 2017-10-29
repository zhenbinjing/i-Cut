var gulp = require('gulp');
var concat = require('gulp-concat');					//- 多个文件合并为一个
var replace = require('gulp-replace');					//- 文本替换
var autoprefixer = require('gulp-autoprefixer');			//- 补充浏览器前缀
var cleanCSS = require('gulp-clean-css');				//- 压缩CSS为一行
var px3rem = require('gulp-px3rem');					//- px转rem
var uncss = require('gulp-uncss');					//- 删除没用到的css
var sass = require('gulp-sass');					//- scss文件编译
var css64 = require('gulp-base64');					//- css文件转base64
var img64 = require('gulp-allimgbase64');				//- img转base64
var tinypng = require('gulp-tinypng');					//- png图片压缩
var svgmin = require('gulp-svgmin');					//- svg图片压缩
var svgSprite = require("gulp-svg-sprites");				//- svg合并
var svg2png = require("gulp-svg2png");					//- svg转png
var svgcss = require('gulp-svg-css');					//- svg-datauri
var webp = require('gulp-webp');					//- 转webp图片
var fontSpider = require('gulp-font-spider');				//- 删除没用到的字体
var processhtml = require('gulp-processhtml');				//- html更改模板
var htmlmin = require('gulp-htmlmin');					//- html压缩
var uglify = require('gulp-uglify');					//- js压缩
var htmlurl = require('gulp-html-url-prefix-custom');			//- html文件添加域名前缀
var pump = require('pump');						//- 报错提示
var browserSync = require('browser-sync');				//- 浏览器同步测试工具
var del = require('del');						//- 删除文件功能模块
var path = require("path");						//- 路径模块

var y_Sz="src";								//- 源码环境路径
var y_Dz="dist";							//- 上线环境路径	 

/*------------------------------Css----------------------------------*/

gulp.task('cssDeal',['sass'],function(){		
	var date=new Date().getTime();					//- 创建版本时间	
	gulp.src(['./'+y_Sz+'/css/*.css'])				//- 需要处理的css文件，放到一个字符串数组里								
	.pipe(replace(/_VERSION_/gi,date))				//- 文件指纹
	.pipe(px3rem({remUnit: 100}))					//- px/100转rem值，如果有不想转换的类在值后面加/*no*/
	.pipe(uncss({
		html: ['./'+y_Sz+'/**/*.html'],				//- 检查的页面
		ignore: ['abc', '.abc', '#abc']				//- 忽略的标签 class or id or 分号隔开
	}))
	.pipe(cleanCSS({						//- 压缩处理成一行,兼容ie
		compatibility: 'ie8',
		keepBreaks: false,
		keepSpecialComments: '*'
	}))
	.pipe(autoprefixer({
		browsers: [
		'last 2 version',					//- 主流浏览器的最新两个版本
		'ios 7',						//- IOS7版本
		'android 2.3',						//- android 2.3版本
		'last 2 Explorer versions'],				//- IE的最新两个版本 'last 2 Explorer versions'
		cascade: true,						//- 是否美化属性值 默认：true 
		remove:true						//- 是否去掉不必要的前缀 默认：true 
	}))
	.pipe(concat('index.css'))					//- 合并后的文件名
	.pipe(gulp.dest('./'+y_Dz+'/css/'));				//- 输出文件本地
})

gulp.task('sass', function () {
	return gulp.src('./'+y_Sz+'/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'+y_Sz+'/css/'));
});

/*------------------------------Img----------------------------------*/

gulp.task('imgDeal',function(){
	gulp.src('./'+y_Sz+'/img/**/*.{png,jpg}')
	.pipe(tinypng('i4PmfZF5yvFHbhn_S6vI1D6WcY5OM07o'))		//- 去官网注册一下,填写TinyPN API KEY 免费版一个月有500张压缩	
	.pipe(gulp.dest('./'+y_Dz+'/img/'));				//- 输出路径	
});

gulp.task('imgCopy',function(){
	gulp.src(['./'+y_Sz+'/img/*.gif'],{				//- 复制一些不需要处理的图片
	base: './'+y_Sz+'/img/'})
	.pipe(gulp.dest('./'+y_Dz+'/img/'));	
})

/*------------------------------Html----------------------------------*/

gulp.task('Htmldr',function(){						
	var date = new Date().getTime();
	return gulp.src('./'+y_Sz+'/*.html')
	.pipe(replace(/_VERSION_/gi, date))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Dz+'/'));
});	

/*------------------------------Font----------------------------------*/

gulp.task('font',['fontSpider'],function(){				//- 先把fontSpider命令执行完后，再去执行font命令，fontSpider需要添加return
	gulp.src(['./'+y_Sz+'/font/**'],{				//- 被复制的文件夹下的所有文件
	base: './'+y_Sz+'/font'})					//- 被复制的目标路径 	
	.pipe(gulp.dest('./'+y_Dz+'/font/'))					
});

gulp.task('fontSpider',function(){
	return gulp.src(path.resolve(process.cwd(), y_Sz) + '/*.html')	
	.pipe(fontSpider());
});

/*------------------------------Jsmin----------------------------------*/

gulp.task('jsmin', function (cb) {					
	pump([
	gulp.src('./'+y_Sz+'/js/*.js'),
	uglify(),
	concat('index.js'),
	gulp.dest('./'+y_Dz+'/js/')
	],cb);
});

/*------------------------------SVG----------------------------------*/

gulp.task('svgSprite',['svgMin'],function(){
	gulp.src('./'+y_Sz+'/img/sprite/sprite.svg')
	.pipe(svg2png())						
	.pipe(gulp.dest('./'+y_Sz+'/img/sprite/'))
});

gulp.task('svgMin',['svgDeal'],function(){
	return gulp.src('./'+y_Sz+'/img/sprite/sprite.svg')
	.pipe(svgmin())							
	.pipe(gulp.dest('./'+y_Dz+'/img/sprite/'))	
	.pipe(svgcss({fileName: 'svgcss'}))
	.pipe(gulp.dest('./'+y_Sz+'/css/'))
});

gulp.task('svgDeal',['svgDel'],function () {	
	var config = {	
	templates: {
		css: require("fs").readFileSync('./'+y_Sz+'/img/sprite/sprite.css', "utf-8")		
	},
	common: 'icon-sprite',
	cssFile: '../css/sprite.css',
	pngPath: '../img/sprite/sprite.png',
	svgPath: '../img/sprite/sprite.svg',
	svg: {sprite: '../img/sprite/sprite.svg'},
	baseSize: 100,
	preview: false
	};
	return gulp.src('./'+y_Sz+'/img/sprite/*.svg')
	.pipe(svgSprite(config))	
	.pipe(gulp.dest('./'+y_Sz+'/img/'));
})

gulp.task('svgDel',function(){
	return del('./'+y_Sz+'/img/sprite/sprite.svg')	
})

/*------------------------------Webp----------------------------------*/

gulp.task('webp',['webp_css'],function(){				
	del(['./'+y_Dz+'/img/**/*.{jpg,png}', '!./'+y_Dz+'/img/**/*.{webp}'])
});	 

gulp.task('webp_css',['webp_html'],function(){
	return gulp.src(['./'+y_Dz+'/css/*.css'])	
	.pipe(replace(/.(jpg|png)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/css/'));				
});

gulp.task('webp_html',['webp_img'],function(){					
	return gulp.src('./'+y_Dz+'/*.html')
	.pipe(replace(/.(jpg|png)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('webp_img',function(){
	return gulp.src('./'+y_Dz+'/img/**/*.{jpg,png}')		
	.pipe(webp())
	.pipe(gulp.dest('./'+y_Dz+'/img/'))
});

/*------------------------------HtmlBase64---------------------------------*/

gulp.task('HtmlBase64',function() {					
	gulp.src('./'+y_Dz+'/*.html')
   	.pipe(img64({limit: '8kb', deleteAfterEncoding: true}))		//- 被编码后是否删除图像
   	.pipe(gulp.dest('./'+y_Dz+'/'));
});

/*------------------------------CssBase64----------------------------------*/

gulp.task('CssBase64',function(){										
	return gulp.src(['./'+y_Dz+'/css/*.css'])										
	.pipe(css64({
	extensions: ['jpg','png','gif','webp'],
	maxImageSize: 2*1024,// bytes
	deleteAfterEncoding: true
	}))
	.pipe(concat('index.css'))					
	.pipe(gulp.dest('./'+y_Dz+'/css/'));				
});

/*------------------------------Htmlmin----------------------------------*/	

gulp.task('Htmlmin',['HtmlUrl'],function(){										
	var options = {
	removeComments: true,						//- 清除HTML注释
	collapseWhitespace: true,					//- 压缩HTML
	minifyJS: true,							//- 压缩页面JS
	minifyCSS: true							//- 压缩页面CSS
	};
	gulp.src('./'+y_Dz+'/*.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('./'+y_Dz+'/'));					
	});

gulp.task('HtmlUrl',function() {					
	return gulp.src('./'+y_Dz+'/*.html')
	.pipe(htmlurl({
		prefix: 'https://i-cut.cc/dist/',
		attrdata: ["img:src", "img:srcset", "img:s-src", "img:data-src", "script:src", "link:href"]
	}))
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

/*------------------------------browserSync----------------------------------*/

gulp.task('bs',function(){
	browserSync.init({
	files: "**",							//- 监控所有文件
	server: {baseDir: './'+y_Dz+'/', index: "rem.html"},		//- 引索
	open : false	
	});
});

gulp.task('min',['cssDeal','imgDeal','imgCopy','Htmldr','font']);
gulp.task('base64',['HtmlBase64','CssBase64']);
