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
        },
        connect: {
        	server: {
		      options: {
		        port: 9001,
		        base: 'www-root'
		      }
		    }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['uglify', 'copy', 'connect']);
}