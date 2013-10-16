var LIVERELOAD_PORT = 35729;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['build/'],
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
		        port: 8888,
		        hostname: 'localhost',
		        base: "app"
		      }
		    },
	        livereload: {
	          options: {
	            middleware: function (connect) {
	              return [
	                require('connect-livereload')({port: LIVERELOAD_PORT}),
	                mountFolder(connect, '.')
	              ];
	            }
	          }
            }
        },
        open: {
	      server: {
	        path: 'http://localhost:<%= connect.server.options.port %>'
	      }
	    },
        watch: {
	      options: {
	        nospawn: true,
	        livereload: LIVERELOAD_PORT
	      },
	      livereload: {
	        files: [
	          'app/index.html'
	        ],
	        tasks: ['build']
	      }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('build', ['clean', 'uglify', 'copy']);
	grunt.registerTask('server', ['build', 'connect:server', 'open', 'watch']);
	grunt.registerTask('default', ['build', 'server']);
}