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
  this.mkdir('app')
  this.mkdir('app/src');
    this.mkdir('app/src/components');
    this.mkdir('app/src/entities');
      this.mkdir('app/src/entities/base');
    this.mkdir('app/src/interfaces');
    this.mkdir('app/src/levels');
    this.mkdir('app/src/libs');
    this.mkdir('app/src/scenes');
    this.mkdir('app/windows');
  this.mkdir('app/web');
  this.mkdir('app/web/images');
  
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');

  this.copy('src/_config.js', 'app/src/config.js');
  this.copy('src/_game.js', 'app/src/game.js');
  this.copy('src/_sprites.js', 'app/src/sprites.js');
  this.copy('src/components/_MouseHover.js', 'app/src/components/MouseHover.js');
  this.copy('src/entities/base/_BaseEntity.js', 'app/src/entities/base/BaseEntity.js');
  this.copy('src/interfaces/_info.js', 'app/src/interfaces/info.js');
  this.copy('src/libs/_backbone-0.9.2.min.js', 'app/src/libs/backbone-0.9.2.min.js');
  this.copy('src/libs/_crafty-0.4.9.js', 'app/src/libs/crafty-0.4.9.js');
  this.copy('src/libs/_jquery-1.7.2.min.js', 'app/src/libs/jquery-1.7.2.min.js');
  this.copy('src/libs/_modernizr-2.5.3.min.js', 'app/src/libs/modernizr-2.5.3.min.js');
  this.copy('src/libs/_require-jquery.js', 'app/src/libs/require-jquery.js');
  this.copy('src/libs/_underscore-1.3.4.min.js', 'app/src/libs/underscore-1.3.4.min.js');
  this.copy('src/scenes/_main.js', 'app/src/scenes/main.js');
};

CraftyGenerator.prototype.gruntfileJSON = function gruntfile() {
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};

CraftyGenerator.prototype.packageJSON = function packageJSON() {
  this.copy('_package.json', 'package.json');
};

CraftyGenerator.prototype.bowerJSON = function bower() {
  this.copy('_bower.json', 'bower.json');
};

CraftyGenerator.prototype.indexHTML = function writeIndex() {
  this.copy("_index.html", "index.html");
}
