var LIVERELOAD_PORT = 35729;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
            release:['build/dev/'],
            dev:['build/release/']
        },
		uglify: {
    		options: {
    	       banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    		},
    		build: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'app/src/libs/',
        		    src: 'jquery/jquery.js',
        		    dest: 'build/dev/src/libs/',
                    ext: '.min.js'
        		  },
                  {
                    expand: true,
                    flatten: true,
                    cwd: 'app/src/libs/',
                    src: 'modernizr/modernizr.js',
                    dest: 'build/dev/src/libs/',
                    ext: '.min.js'
                  },
                  {
                    'build/dev/src/libs/requirejs-jquery.min.js': ['app/src/libs/requirejs-jquery/parts/require.js', 'app/src/libs/requirejs-jquery/parts/query.js']
                  }]
            }
		},
		copy: {
    	  dev: {
            files: [{
              expand: true,
              flatten: true,
              cwd: 'app/src/libs/',
              src: 'backbone/backbone-min.js',
              dest: 'build/dev/src/libs/',
              filter: 'isFile'
            },
            {
              expand: true,
              flatten: true,
              cwd: 'app/src/libs/',
              src: 'crafty/crafty.min.js',
              dest: 'build/dev/src/libs/',
              filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                cwd: 'app/src/libs/',
                src: 'underscore/underscore-min.js',
                dest: 'build/dev/src/libs/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'app/src/',
                src: ['**/*.js', '!libs/**'],
                dest: 'build/dev/src/',
                filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'build/dev/',
                filter: 'isFile'
            }]
          }
        },
        connect: {
        	server: {
		      options: {
		        port: 8888,
		        hostname: 'localhost',
		        base: "build/dev"
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
