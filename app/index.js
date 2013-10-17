'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var CraftyGenerator = module.exports = function CraftyGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CraftyGenerator, yeoman.generators.Base);

CraftyGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    name: 'gameName',
    message: 'What is the name of your game?',
    default: (this.appname)
  }];

  this.prompt(prompts, function (props) {
    this.gameName = props.gameName;

    cb();
  }.bind(this));
};

CraftyGenerator.prototype.app = function app() {
};

CraftyGenerator.prototype.projectfiles = function projectfiles() {
  this.mkdir('app/web/css');
  this.mkdir('app/web/images');

  this.copy('_.editorconfig', '.editorconfig');
  this.copy('_.jshintrc', '.jshintrc');

  this.copy('src/_config.js', 'app/src/config.js');
  this.copy('src/_game.js', 'app/src/game.js');
  this.copy('src/_sprites.js', 'app/src/sprites.js');
  this.copy('src/components/_MouseHover.js', 'app/src/components/MouseHover.js');
  this.copy('src/entities/base/_BaseEntity.js', 'app/src/entities/base/BaseEntity.js');
  this.copy('src/interfaces/_info.js', 'app/src/interfaces/info.js');
  this.copy('src/scenes/_main.js', 'app/src/scenes/main.js');
};

CraftyGenerator.prototype.gruntfileJSON = function gruntfile() {
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};

CraftyGenerator.prototype.packageJSON = function packageJSON() {
  this.copy('_package.json', 'package.json');
};

CraftyGenerator.prototype.bowerJSON = function bower() {
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

CraftyGenerator.prototype.indexHTML = function writeIndex() {
  this.copy("_index.html", "app/index.html");
}
