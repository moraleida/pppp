module.exports = {
	dist: {
		options: {
			processors: [
				require('autoprefixer')({browsers: 'last 2 versions'})
			]
		},
		files: { 
			'assets/css/pppp.css': [ 'assets/css/pppp.css' ]
		}
	}
};