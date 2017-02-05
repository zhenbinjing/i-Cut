var TouchSlide = require('./TouchSlide.js');

TouchSlide({ 
	  slideCell:"#focus",
	  titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	  mainCell:".bd ul", 
	  effect:"left", 
	  autoPlay:true,//自动播放
	  autoPage:true //自动分页
});