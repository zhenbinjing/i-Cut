var path = require("path");	
var critical = require('critical');
var y_Dz = "dist";
var lj = path.resolve(process.cwd(), y_Dz);

critical.generate({
    inline: true,
    base: lj,
    src: 'rem.html',     
    width: 320,
    height: 568,
	minify: true,
	//ignore: ['@font-face',/url\(/]
	pathPrefix: '/dist/',
	dest: 'rem.cl.html',
	penthouse: {
        blockJSRequests: false,
    }
})	