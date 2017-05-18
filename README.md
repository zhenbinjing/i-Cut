i-Cut
===========================

[![Build Status](https://travis-ci.org/zhenbinjing/i-Cut.svg?branch=master)](https://travis-ci.org/zhenbinjing/i-Cut)
[![codecov](https://codecov.io/gh/zhenbinjing/i-Cut/branch/master/graph/badge.svg)](https://codecov.io/gh/zhenbinjing/i-Cut)
[![devDependencies Status](https://david-dm.org/zhenbinjing/i-Cut/dev-status.svg)](https://david-dm.org/zhenbinjing/i-Cut?type=dev)
[![npm](https://img.shields.io/npm/v/i-cut.svg)](https://www.npmjs.com/package/i-cut)
[![MIT Licence](https://img.shields.io/npm/l/i-cut.svg)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://saucelabs.com/browser-matrix/icut.svg)](https://saucelabs.com/beta/builds/8913e384e9de43ffb3813d69b4054b8c)

i-Cut 是一个快速成形，全终端适配的CSS框架，配备工程化流程，内含 [Gulp](https://github.com/gulpjs/gulp) 和 [Webpack](https://github.com/webpack/webpack) 打包任务以及其它常用工具。

flexgrid.css 是 i-Cut 中最重要的布局文件，采用 [Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 与 [Grid-Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid) 两种布局结合而成，是本框架的核心。

## 辅助工具

免标软件：[Zeplin](https://zeplin.io/) 、 [Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)。像素级对比插件：[PerfectPixel by WellDoneCode](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog)。

## 移动端适配方案

zeplin 里的提示或者设计稿里的标注值是多少就写多少，gulp 已配置 px 批量转换 rem 和其它自动化流程。

页面的 head 头部代码配合 rem 能实现动态比例缩放，高清还原，从而告别繁琐的 media。