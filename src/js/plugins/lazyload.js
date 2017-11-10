export default function lazyload (){
	
	function isInSight(el) {
	  const bound = el.getBoundingClientRect();
	  const clientHeight = window.innerHeight;
	  //如果只考虑向下滚动加载
	  //const clientWidth=window.innerWeight;
	  return bound.top <= clientHeight + 100;
	}

	let index = 0;
	function checkImgs() {
	  const imgs = document.querySelectorAll('.lazyload');
	  for (let i = index; i < imgs.length; i++) {
		if (isInSight(imgs[i])) {
		  loadImg(imgs[i]);
		  index = i;
		}
	  }
	}

	function loadImg(el) {
	  if (!el.src) {
		const source = el.dataset.src;
		el.src = source;
	  }
	}

	function throttle(fn, mustRun = 100) {
	  const timer = null;
	  let previous = null;
	  return function() {
		const now = new Date();
		const context = this;
		const args = arguments;
		if (!previous) {
		  previous = now;
		}
		const remaining = now - previous;
		if (mustRun && remaining >= mustRun) {
		  fn.apply(context, args);
		  previous = now;
		}
	  }
	}
	window.onload=checkImgs();
	window.onscroll =throttle(checkImgs);
}