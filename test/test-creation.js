/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('crafty generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('crafty:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'package.json',
      'bower.json',
      'index.html',
      'app/src/config.js',
      'app/src/game.js',
      'app/src/sprites.js',
      'app/src/components/MouseHover.js',
      'app/src/entities/base/BaseEntity.js',
      'app/src/interfaces/info.js',
      'app/src/libs/backbone-0.9.2.min.js',
      'app/src/libs/crafty-0.4.9.js',
      'app/src/libs/jquery-1.7.2.min.js',
      'app/src/libs/modernizr-2.5.3.min.js',
      'app/src/libs/require-jquery.js',
      'app/src/libs/underscore-1.3.4.min.js',
      'app/src/scenes/main.js'
    ];

    helpers.mockPrompt(this.app, {
      'gameName': 'Game'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});