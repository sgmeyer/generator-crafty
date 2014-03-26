'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var SceneGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the scene subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('_base.js', 'app/scripts/scenes/' + this.name + '.js');
  }
});

module.exports = SceneGenerator;
