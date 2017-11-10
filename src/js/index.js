import TouchSlide from './plugins/TouchSlide';
import scrollLoad from './plugins/scrollLoad';
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
scrollLoad({  
	src:'data-src',
	time: 0
});