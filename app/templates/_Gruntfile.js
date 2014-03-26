// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

<<<<<<< HEAD
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['dist'],
		uglify: {
			build: {
				files: [{
          expand: true,
          cwd: 'app/src/',
          src: ['**/*.js', '!libs/**/*', '!bower_components/**/*'],
          dest: 'dist/src/',
          ext: '.js'
				},
				{
          expand: true,
          flatten: true,
          cwd: 'app/src/brower_components/',
  		    src: ['jquery/jquery.js', 'modernizr/modernizr.js'],
  		    dest: 'dist/src/libs/',
          ext: '.min.js'
    		},
        {
          'dist/src/libs/requirejs-jquery.min.js': ['app/src/bower_components/requirejs-jquery/parts/require.js', 'app/src/bower_components/requirejs-jquery/parts/query.js']
        }]
			}
		},
		copy: {
    	  dist: {
          files: [{
            expand: true,
            flatten: true,
            cwd: 'app/src/bower_components/',
            src: ['backbone/backbone-min.js', 'backbone/backbone-min.map', 'underscore/underscore-min.js', 'underscore/underscore-min.map'],
            dest: 'dist/src/libs/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'app/src/libs/',
            src: ['**/*'],
            dest: 'dist/src/libs/',
            filter: 'isFile'
          }, 
          {
          	expand: true,
          	cwd: 'app/web',
          	src: ['**/*'],
          	dest: 'dist/web',
          	filter: 'isFile'
          }]
        }
      },
      connect: {
      	server: {
  	      options: {
  	        port: 8888,
  	        hostname: 'localhost',
  	        base: "app/"
  	      }
        },
        livereload: {
          options: {
            middleware: function (connect) {
              return [require('connect-livereload')({port: LIVERELOAD_PORT}),
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
        html: {
          options: { livereload: true },
          files: ['app/index.html'],
        },
        js: {
          options: { livereload: true },
          files: ['app/src/**/*.js']
        }
	    }
	});
=======
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      emberTemplates: {
        files: '<%%= yeoman.app %>/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      neuter: {
        files: ['<%%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['neuter']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.tmp/scripts/*.js',
          '<%%= yeoman.app %>/*.html',
          '{.tmp,<%%= yeoman.app %>}/styles/{,*/}*.css',
          '<%%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'test'),
              mountFolder(connect, '.tmp')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%%= yeoman.dist %>/*',
            '!<%%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },<% if (testFramework === 'mocha') { %>
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%%= connect.options.port %>/index.html']
        }
      }
    },<% } else if (testFramework === 'jasmine') { %>
    jasmine: {
      all: {
        /*src: '',*/
        options: {
          specs: 'test/spec/{,*/}*.js'
        }
      }
    },<% } %>
    rev: {
      dist: {
        files: {
          src: [
            '<%%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%%= yeoman.dist %>/styles/{,*/}*.css',
            '<%%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '.tmp/index.html',
      options: {
        dest: '<%%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {

        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>',
          src: '*.html',
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.app %>',
          dest: '<%%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'styles/fonts/*',
            'libs/**',
            'bower_components/**'
          ]
        }]
      }
    },
    concurrent: {
      dist: [
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },<%if (options.karma) { %>
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },<% } %>
    neuter: {
      server: {
        options: {
          filepathTransform: function (filepath) {
            return yeomanConfig.app + '/' + filepath;
          }
        },
        src: '<%%= yeoman.app %>/scripts/app.js',
        dest: '.tmp/scripts/combined-scripts.js'
      },
      dist: {
        options: {
          filepathTransform: function (filepath) {
            return yeomanConfig.app + '/' + filepath;
          }
        },
        src: '<%%= yeoman.app %>/scripts/app.js',
        dest: '<%%= yeoman.dist %>/scripts/combined-scripts.js'
      },
    }
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }
>>>>>>> bd10ddbf8732c0e714aef30dafae4eec3374c87a

    grunt.task.run([
      'clean:server',
      'neuter:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'connect:test',
    'neuter:server',<% if (options.karma) { %>
    'karma'<% } else if (testFramework === 'mocha') { %>
    'mocha'<% } else if (testFramework === 'jasmine') { %>
    'jasmine'<% } %>
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'neuter:dist',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
