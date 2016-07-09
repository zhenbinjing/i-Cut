##UI开发框架

框架适合PC端（响应式）和移动端（自适应）制作，陆续更新中，不断实践和修复bug。

##项目的文件解释

src/css/onebase.css是底层文件，没有设置任何关于数值的属性。

src/css/style.css是设置关于有数值的样式的文件（有响应式栅格和代码注释）。

src/css/t.css是设置关于组件样式的文件。

src/js/scrollLoad.js与TouchSlide.1.1.js分别是图片延迟加载和滑动插件。

src/font/、src/icon/、src/img/分别是自定义字体、矢量图标、图片。

##移动端开发

规则1：要求设计师设计的PSD宽度为640px或其他标准尺寸，但DPI必须是为72,这样才接近一比一还原。

规则2：在src/index.html的头部加了一段js，实现动态改变根元素的值令字体与盒子模型的值以及iframe等比例缩放，

从而告别繁琐的媒体查询。★★★（变量maxW就是设计稿的画布宽度值）★★★

规则3：样式表里所有单位写px，设计稿里的值是多少就写多少，已内置gulp-px3rem，建议用Flexbox布局。

关键的设置1:头部的js的maxW的值;

关键的设置2：src/css/style.css中，( html{font-size:100px}，m{max-width:640px;})

关键的设置3：gulpfile.js px3rem({remUnit: 100})

案例1：https://github.com/zhenbinjing/qietu/tree/master/m

##PC端开发

在src/cc.html作为例子，对于平常用的Bootstrap框架的同学一下就能看懂，本框架只采用栅格系统用于自己的项目中。

这里有篇文章讲得挺好的，推荐一下，希望对大家有帮助（对布局与设计的讲得很好）。

https://www.douban.com/note/489518516/

##关于工作流

框架配有gulp内置的插件，有需要的朋友可以自行修改里面的代码。


