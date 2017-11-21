import TouchSlide from './plugins/TouchSlide';
//如果只是滚动加载就用lazyload
//import lazyload from './plugins/lazyload';
//如果是响应式滚动加载就用lazysizes
import lazysizes from './plugins/lazysizes';


TouchSlide({ 
	slideCell:"#focus",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"left", 
	autoPlay:true,//自动播放,
	interTime:3000,//切换时间
	autoPage:true,//自动分页
	switchLoad:"s-src"
});
//lazyload();
lazysizes();