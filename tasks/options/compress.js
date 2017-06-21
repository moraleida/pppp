module.exports = {
	main: {
		options: {
			mode: 'zip',
			archive: './release/pppp.<%= pkg.version %>.zip'
		},
		expand: true,
		cwd: 'release/<%= pkg.version %>/',
		src: ['**/*'],
		dest: 'pppp/'
	}
};