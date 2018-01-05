var gulp = require('gulp');
var concat = require('gulp-concat');                        //- 多个文件合并为一个
var replace = require('gulp-replace');                      //- 文本替换
var autoprefixer = require('gulp-autoprefixer');            //- 补充浏览器前缀
var cleanCSS = require('gulp-clean-css');                   //- 压缩CSS为一行
var px3rem = require('gulp-px3rem');                        //- px转rem
var uncss = require('gulp-uncss');                          //- 删除没用到的css
var csso = require('gulp-csso');                            //- 深入优化css
var sass = require('gulp-sass');                            //- scss文件编译
var css64 = require('gulp-base64');                         //- css文件转base64
var img64 = require('gulp-allimgbase64');                   //- img转base64
var tinypng = require('gulp-tinypng-nokey');                //- png图片压缩
var spritesmith = require('gulp.spritesmith');              //- css雪碧图
var merge = require('merge-stream');                        //- 合并流
var svgmin = require('gulp-svgmin');                        //- svg图片压缩
var svgSprite = require("gulp-svg-sprites");                //- svg合并
var svg2png = require("gulp-svg2png");                      //- svg转png
var svgcss = require('gulp-svg-css');                       //- svg-datauri
var webp = require('gulp-webp');                            //- 转webp图片
var responsive = require('gulp-responsive');                //- 转rwd图片
var imageSet = require('gulp-image-set-plus');              //- 兼容images-set
var lazyScr = require('gulp-lazysizes-srcset');             //- 设置scrset
var fontSpider = require('gulp-font-spider');               //- 删除没用到的字体
var processhtml = require('gulp-processhtml');              //- html更改模板
var htmlmin = require('gulp-htmlmin');                      //- html压缩
var uglify = require('gulp-uglify');                        //- js压缩
var rev = require('gulp-rev');                              //- 添加哈希值
var revCollector = require('gulp-rev-collector');           //- 改为哈希值版本路径
var htmlurl = require('gulp-html-url-prefix-custom');       //- html文件添加域名前缀
var pump = require('pump');                                 //- 报错提示
var browserSync = require('browser-sync');                  //- 浏览器同步测试工具
var del = require('del');                                   //- 删除文件功能模块
var path = require("path");                                 //- 路径模块

var y_Sz="src";                                             //- 源码版本
var y_Dz="dist";                                            //- 上线版本
var y_Rz="rev";                                             //- 缓存版本
var y_Rn="revjson";                                         //- 缓存json	

/*------------------------------Del dist----------------------------------*/

gulp.task('distDelFile',function(){	
	del('./'+y_Dz+'/');
})

/*------------------------------cssSprite----------------------------------*/

gulp.task('cssSprite',['delIcon'],function(){
	var spriteData = gulp.src('./'+y_Sz+'/static/img/icon/*.png').pipe(spritesmith({
	imgName: 'sprite.png',
	cssName: 'icon-sprite.css',
	algorithm: 'top-down',
	cssTemplate: './'+y_Sz+'/static/img/icon/sprite.css.handlebars'
	}));
	
	var imgStream = spriteData.img
	.pipe(gulp.dest('./'+y_Sz+'/static/img/icon/'));
 
	var cssStream = spriteData.css
	.pipe(csso())
	.pipe(gulp.dest('./'+y_Sz+'/static/css/'));
	
	return merge(imgStream, cssStream);
});

gulp.task('delIcon',function(){
	return del('./'+y_Sz+'/static/img/icon/sprite.png')	
})

/*------------------------------SVG----------------------------------*/

gulp.task('svgDeal',['svgMin'],function(){                     
	gulp.src('./'+y_Sz+'/static/img/svg/sprite.svg')
	.pipe(svg2png())                                       //- svg转png
	.pipe(gulp.dest('./'+y_Sz+'/static/img/svg/'))
});

gulp.task('svgMin',['svgSprite'],function(){                   
	return gulp.src('./'+y_Sz+'/static/img/svg/sprite.svg')
	.pipe(svgmin())                                        //- 压缩文件	
	.pipe(gulp.dest('./'+y_Sz+'/static/img/svg/'))
	.pipe(svgcss({fileName: 'svgcss', cssPrefix: 'svg-',}))                    //- DataURI方案
	.pipe(gulp.dest('./'+y_Sz+'/static/css/'))	
});

gulp.task('svgSprite',['svgDel'],function () {	
	var config = {	
	templates: {
		css: require("fs").readFileSync('./'+y_Sz+'/static/img/svg/sprite.css', "utf-8")		
	},
	common: 'svg-sprite',
	cssFile: '../css/svg-sprite.css',
	pngPath: '../img/svg/sprite.png',
	svgPath: '../img/svg/sprite.svg',
	svg: {sprite: '../img/svg/sprite.svg'},
	baseSize: 100,
	preview: false
	};
	return gulp.src('./'+y_Sz+'/static/img/svg/*.svg')
	.pipe(svgSprite(config))	
	.pipe(gulp.dest('./'+y_Sz+'/static/img/'));
})

gulp.task('svgDel',function(){
	return del('./'+y_Sz+'/static/img/svg/sprite.svg')	
})

/*-------------------------------Css-------------------------------------*/

gulp.task('cssAuto',['cssO'],function () {
	gulp.src(['./'+y_Dz+'/static/css/*.css'])
	.pipe(autoprefixer({
		browsers: [
		'last 2 version',                          //- 主流浏览器的最新两个版本
		'ios 7',                                   //- IOS7版本
		'android 2.3',                             //- android 2.3版本
		'last 2 Explorer versions'],               //- IE的最新两个版本 'last 2 Explorer versions'
		cascade: true,                             //- 是否美化属性值 默认：true 
		remove:true                                //- 是否去掉不必要的前缀 默认：true 
	}))
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));	
});

gulp.task('cssO',['image-set'],function () {
	return gulp.src(['./'+y_Dz+'/static/css/*.css'])
	.pipe(csso())
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));	
});

gulp.task('image-set',['cleanCSS'],function () {	
	return gulp.src(['./'+y_Dz+'/static/css/*.css'])
	.pipe(imageSet())
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));
});

gulp.task('cleanCSS',['cssMin'],function () {
	return gulp.src(['./'+y_Dz+'/static/css/*.css'])
	.pipe(cleanCSS({compatibility: 'ie8',keepSpecialComments: '*'}))
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));	
});

gulp.task('cssMin',['Sass'],function(){	
	return gulp.src(['./'+y_Sz+'/static/css/*.css'])          //- 需要处理的css文件，放到一个字符串数组里								
	.pipe(px3rem({remUnit: 100}))                      //- px/100转rem值，如果有不想转换的类在值后面加/*no*/
	.pipe(uncss({
        html: ['./'+y_Sz+'/**/*.html'],                    //- 检查的页面
        ignore: ['abc', '.abc', '#abc']                    //- 忽略的标签 class or id or 分号隔开
	}))
	.pipe(concat('index.css'))                         //- 合并后的文件名
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));               //- 输出文件本地
})

gulp.task('Sass', function () {
	return gulp.src('./'+y_Sz+'/static/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'+y_Sz+'/static/css/'));
});
/*------------------------------Img----------------------------------*/

gulp.task('imgDeal',['imgMin'],function(){
	gulp.src(['./'+y_Sz+'/static/img/*.gif'],{                //- 复制一些不需要处理的图片
	base: './'+y_Sz+'/static/img/'})
	.pipe(gulp.dest('./'+y_Dz+'/static/img/'));	
})

gulp.task('imgMin',['rwdImg'],function(){
	return gulp.src(['./'+y_Sz+'/static/img/**/*.{png,jpg}', '!./'+y_Sz+'/static/img/icon/icon*.png'])
	.pipe(tinypng())
	.pipe(gulp.dest('./'+y_Dz+'/static/img/'));               //- 输出路径	
});

gulp.task('rwdImg', ['delrwdImg'],function () {                      //- 生成rwd图片
	return gulp.src('./'+y_Sz+'/static/img/rwd/*.{png,jpg}')
	.pipe(responsive({
	'*': [
	{width: '25%',rename: {suffix: '@1x'}},
	{width: '50%',rename: {suffix: '@2x'}},
	{width: '75%',rename: {suffix: '@3x'}},
	{width: '100%',rename: {suffix: ''}}
	]},
	{
	progressive: true,
	withMetadata: false,
	errorOnEnlargement: false,
	}))
	.pipe(gulp.dest('./'+y_Sz+'/static/img/rwd/'));
});

gulp.task('delrwdImg',function(){				
	return del(['./'+y_Sz+'/static/img/**/*@*.*']);		
});	

/*------------------------------Html----------------------------------*/

gulp.task('htmlDeal',function(){						
	gulp.src('./'+y_Sz+'/*.html')
	.pipe(processhtml())
	.pipe(lazyScr({
	decodeEntities: false,
	data_src: 'data-src',
	data_srcset: 'data-srcset',
	suffix: {1: '@1x', 2: '@2x', 3: '@3x', 4: ''}
	}))
	.pipe(gulp.dest('./'+y_Dz+'/'));
});	

/*------------------------------Font----------------------------------*/

gulp.task('fontCopy',['fontSpider'],function(){            //- 先把fontSpider命令执行完后，再去执行font命令，fontSpider需要添加return
	gulp.src(['./'+y_Sz+'/static/font/**'],{                  //- 被复制的文件夹下的所有文件
	base: './'+y_Sz+'/static/font'})                          //- 被复制的目标路径 	
	.pipe(gulp.dest('./'+y_Dz+'/static/font/'))					
});

gulp.task('fontSpider',function(){
	return gulp.src(path.resolve(process.cwd(), y_Sz) + '/*.html')	
	.pipe(fontSpider());
});

/*------------------------------Jsmin----------------------------------*/

gulp.task('jsMin', function (cb) {
	pump([
	gulp.src('./'+y_Sz+'/static/js/*.js'),
	uglify(),
	concat('index.js'),
	gulp.dest('./'+y_Dz+'/static/js/')
	],cb);
});

/*------------------------------Webp----------------------------------*/

gulp.task('webp',['webp_css'],function(){				
	del(['./'+y_Dz+'/static/img/**/*.{jpg,png}', '!./'+y_Dz+'/static/img/**/*.{webp}']);		
});	 

gulp.task('webp_css',['webp_html'],function(){
	return gulp.src(['./'+y_Dz+'/static/css/*.css'])	
	.pipe(replace(/.(jpg|png)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));				
});

gulp.task('webp_html',['webp_img'],function(){					
	return gulp.src('./'+y_Dz+'/*.html')
	.pipe(replace(/.(jpg|png)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('webp_img',function(){
	return gulp.src('./'+y_Dz+'/static/img/**/*.{jpg,png}')		
	.pipe(webp({lossless:true}))
	.pipe(gulp.dest('./'+y_Dz+'/static/img/'))
});

/*------------------------------HtmlBase64---------------------------------*/

gulp.task('htmlBase64',function() {					
	gulp.src('./'+y_Dz+'/*.html')
   	.pipe(img64({limit: '8kb', deleteAfterEncoding: true}))   //- 被编码后是否删除图像
   	.pipe(gulp.dest('./'+y_Dz+'/'));
});

/*------------------------------CssBase64----------------------------------*/

gulp.task('cssBase64',function(){										
	gulp.src(['./'+y_Dz+'/static/css/*.css'])										
	.pipe(css64({
	extensions: ['jpg','png','gif','webp'],
	maxImageSize: 2*1024,// bytes
	deleteAfterEncoding: true
	}))
	.pipe(concat('index.css'))					
	.pipe(gulp.dest('./'+y_Dz+'/static/css/'));				
});

/*-------------------------------------Rev-----------------------------------*/	

gulp.task('revDelfile', function () {
	del('./'+y_Rz+'/');
	del('./'+y_Rn+'/');	
});

gulp.task('revHtml',['revStyle'],function () {
	gulp.src(['./'+y_Rn+'/**/*.json', './'+y_Dz+'/*.html'])
	.pipe(revCollector())
	.pipe(gulp.dest('./'+y_Rz+'/'));
});

gulp.task('revStyle',function () {
	return gulp.src(['./'+y_Rn+'/**/*.json', './'+y_Rz+'/static/css/*.css'])
	.pipe(revCollector())
	.pipe(gulp.dest('./'+y_Rz+'/static/css/'));
});

gulp.task('revDeal',['revCss','revJs','revFont','revImg']);

gulp.task('revCss',function(){										
	gulp.src(['./'+y_Dz+'/static/css/*.css'])										
	.pipe(rev())
	.pipe(gulp.dest('./'+y_Rz+'/static/css/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./'+y_Rn+'/static/css/'))	
});

gulp.task('revJs',function(){										
	gulp.src(['./'+y_Dz+'/static/js/*.js'])										
	.pipe(rev())
	.pipe(gulp.dest('./'+y_Rz+'/static/js/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./'+y_Rn+'/static/js/'));
});

gulp.task('revFont',function(){										
	gulp.src(['./'+y_Dz+'/static/font/*.*'])										
	.pipe(rev())
	.pipe(gulp.dest('./'+y_Rz+'/static/font/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./'+y_Rn+'/static/font/'));
});

gulp.task('revImg',function(){										
	gulp.src(['./'+y_Dz+'/static/img/**/*.*'])										
	.pipe(rev())
	.pipe(gulp.dest('./'+y_Rz+'/static/img/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./'+y_Rn+'/static/img/'));			
});

/*------------------------------Htmlmin----------------------------------*/	

gulp.task('htmlMin',function(){										
	var options = {
	removeComments: true,                                    //- 清除HTML注释
	collapseWhitespace: true,                                //- 压缩HTML
	minifyJS: true,                                          //- 压缩页面JS
	minifyCSS: true                                          //- 压缩页面CSS
	};
	gulp.src('./'+y_Rz+'/*.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('./'+y_Rz+'/'));					
	});

gulp.task('htmlUrl',function() {					
	gulp.src('./'+y_Rz+'/*.html')
	.pipe(htmlurl({
		prefix: 'https://i-cut.cc/rev/static',
		attrdata: ["img:src", "img:data-src", "img:s-src", "img:data-srcset", "script:src", "link:href"]
	}))
	.pipe(gulp.dest('./'+y_Rz+'/'));
});

/*------------------------------browserSync----------------------------------*/

gulp.task('bs',function(){
	browserSync.init({
	files: "**",                                             //- 监控所有文件
	server: {baseDir: './'+y_Dz+'/', index: "index.html"},     //- 引索
	open : false	
	});
});

gulp.task('allmin',['cssAuto','htmlDeal','fontCopy','imgDeal']);
gulp.task('Base64',['htmlBase64','cssBase64']);