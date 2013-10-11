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

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'gameName',
    message: 'What is the name of your game?',
    default: ('game')
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.gameName;

    cb();
  }.bind(this));
};

CraftyGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_bower.json', 'bower.json');
  this.copy('_index.html', 'index.html');
};

CraftyGenerator.prototype.projectfiles = function projectfiles() {
  this.mkdir('src');
    this.mkdir('src/components');
    this.mkdir('src/entities');
      this.mkdir('src/entities/base');
    this.mkdir('src/interfaces');
    this.mkdir('src/levels');
    this.mkdir('src/libs');
    this.mkdir('src/scenes');
    this.mkdir('windows');
  this.mkdir('web');
  this.mkdir('web/images');
  
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');

  this.copy('src/_config.js', 'src/config.js');
  this.copy('src/_game.js', 'src/game.js');
  this.copy('src/_sprites.js', 'src/sprites.js');
  this.copy('src/components/_MouseHover.js', 'src/components/MouseHover.js');
  this.copy('src/entities/base/_BaseEntity.js', 'src/entities/base/BaseEntity.js');
  this.copy('src/interfaces/_info.js', 'src/interfaces/info.js');
  this.copy('src/libs/_backbone-0.9.2.min.js', 'src/libs/backbone-0.9.2.min.js');
  this.copy('src/libs/_crafty-0.4.9.js', 'src/libs/crafty-0.4.9.js');
  this.copy('src/libs/_jquery-1.7.2.min.js', 'src/libs/jquery-1.7.2.min.js');
  this.copy('src/libs/_modernizr-2.5.3.min.js', 'src/libs/modernizr-2.5.3.min.js');
  this.copy('src/libs/_require-jquery.js', 'src/libs/require-jquery.js');
  this.copy('src/libs/_underscore-1.3.4.min.js', 'src/libs/underscore-1.3.4.min.js');
  this.copy('src/scenes/_main.js', 'src/scenes/main.js');
};
