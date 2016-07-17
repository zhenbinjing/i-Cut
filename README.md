##UI开发框架

框架适合移动端`(自适应)`和PC端`(响应式)`制作，陆续更新中，不断实践和修复bug。

##文件目录

```txt
  onetoui/
  |__ gulpfile.js
  |__ README.md
  |__ src/
    |__ mip.html
    |__ index.html
    |__ css/
      |__ onebase.css
      |__ style.css
      |__ t.css
    |__ font/
      |__ fzcjjt.ttf
    |__ icon/
      |__ iconfont.eot
      |__ iconfont.svg
      |__ iconfont.ttf
      |__ iconfont.woff
    |__ img/
      |__ a.png
      |__ b.png
      |__ c.png
      |__ d.jpg
    |__ js/
      |__ scrollLoad.js
      |__ TouchSlide.1.1.js
      |__ z.js
    |__ sass/
      |__ n.scss
```

##文件目录解释

>src/css/onebase.css是底层文件，没有设置任何关于数值的属性。

>src/css/style.css是设置关于有数值的样式的文件（有响应式栅格和代码注释）。

>src/css/t.css是设置关于组件样式的文件。

>src/sass/n.scss是循环常用 `字体大小`,`行高`,`内外边距` 值的文件。

>src/js/scrollLoad.js与TouchSlide.1.1.js分别是图片延迟加载和滑动插件。

>src/font/、src/icon/、src/img/分别是自定义字体、矢量图标、图片。

##移动端开发

规则1：要求设计师设计的PSD宽度为640px或其他标准尺寸，但`DPI`必须是为72,这样才接近一比一还原。

规则2：在src/index.html的头部加了一段js，实现动态改变根元素的值令字体与盒子模型的值以及iframe等比例缩放，

从而告别繁琐的媒体查询。`(变量maxW就是设计稿的画布宽度值)`

规则3：样式表里所有单位写`px`，设计稿里的值是多少就写多少，已内置gulp-px3rem，建议用Flexbox布局。

>关键设置1：头部js的`maxW`变量值;

>关键设置2：src/css/style.css中，`html{font-size:100px}` `.m{max-width:640px;}`

>关键设置3：gulpfile.js `px3rem({remUnit: 100})`

案例1：https://github.com/zhenbinjing/qietu/tree/master/m

##PC端开发

在src/mip.html作为例子，对于平常用的`Bootstrap`框架的同学一下就能看懂，本框架只采用栅格系统用于自己的项目中。

这里有篇文章安利一下，希望对大家有帮助（对布局与设计的讲得很好）https://www.douban.com/note/489518516/

如果想要兼容ie8的同学就用respond.js吧。https://github.com/scottjehl/Respond

##关于工作流

框架配有gulp插件，一般是自己常用的，有需要的同学可以自行修改里面的代码。

