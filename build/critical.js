const glob     = require('glob');
const critical = require('critical');

function generateCriticalPath(err, files) {
	if (err) throw err;
	files.forEach((file, index) => {
		const page = file.split('./').pop();
			critical.generate({
				inline: true,
				base: './',
				src: page,     
				width: 500,
				height: 200,
				minify: true,
				ignore: ['.bglazy','@font-face',/url\(/],
				//pathPrefix: '/dist/',
				dest: page
			})	
	});
}

glob(`./dist/*.html`, generateCriticalPath);