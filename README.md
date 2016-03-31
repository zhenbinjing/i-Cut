﻿##移动端开发框架

规则1：要求设计师设计的PSD宽度为640px或其他标准尺寸，但DPI必须是为72,这样才接近一比一还原。

规则2：在index.html中head加了一段js,这个是为了动态改变根元素的字体大小，变量改成你设计稿的大小。

规则3：字体单位为REM,PSD里的字体点数除以10就是字体大小。建议用Flexbox布局。

规则4：宽度、高度、内边距、外边距的单位全部为百分比（目标PSD宽度/PSD尺寸宽度）

##项目的src/css文件夹解释

onebase.css是底层文件，没有设置任何关于数值的属性

style.css是设置关于有数值的样式的文件

t.css是设置关于组件样式的文件

##响应式开发

这里有篇文章讲得挺好的，推荐一下，希望对大家有帮助（对布局的重点讲得很好，最好自己懂得些设计）

https://www.douban.com/note/489518516/

最后，如果这个框架对你有帮助，请给我一个Star吧，反正又不会怀孕...

