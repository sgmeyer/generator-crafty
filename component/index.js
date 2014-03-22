'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('_base.js', 'app/components/' + this.name + '.js');
  }
});

module.exports = ComponentGenerator;
