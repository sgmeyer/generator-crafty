module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		  options: {
		    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		  },
		  build: {
		    src: ['src/**/*.js', '!src/libs/**'],
		    dest: 'build/src/<%= pkg.name %>.min.js'
		  }
		},
		copy: {
    	  dev: {
            files: [{
              src: 'src/libs/*.js',
              dest: 'build/'
            }]
          }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['uglify', 'copy']);
}