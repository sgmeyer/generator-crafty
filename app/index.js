'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var CraftyGenerator = module.exports = function CraftyGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  if (!options['test-framework']) {
    options['test-framework'] = 'mocha';
  }

  // hook for karma test runner
  this.options.karma = options.karma;

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', { as: 'app' });

  this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), '_index.html'));

  //this.on('end', function () {
  //  this.installDependencies({ skipInstall: options['skip-install'] });
  //});
};

util.inherits(CraftyGenerator, yeoman.generators.Base);

CraftyGenerator.prototype.askQuestions = function askQuestions() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    name: 'gameName',
    message: 'What is the name of your game?',
    default: (this.appname)
  }, {
    name: 'gameWidth',
    message: 'How wide do you want your game canvas to be?',
    default: 800
  }, {
    name: 'gameHeight',
    message: 'And how tall do you want it to be?',
    default: 600
  }];

  this.prompt(prompts, function (props) {
    this.gameName = props.gameName;
    this.gameWidth = props.gameWidth;
    this.gameHeight = props.gameHeight;

    cb();
  }.bind(this));
};

CraftyGenerator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/scripts/scenes');
  this.mkdir('app/scripts/components');
  this.mkdir('app/libs');
  this.mkdir('app/bower_components');
};

CraftyGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('_.editorconfig', '.editorconfig');
};

CraftyGenerator.prototype.jshintrc = function jsHint() {
  this.copy('_.jshintrc', '.jshintrc');
};

CraftyGenerator.prototype.gruntfileJSON = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
};

CraftyGenerator.prototype.packageJSON = function packageJSON() {
  this.copy('_package.json', 'package.json');
};

CraftyGenerator.prototype.bowerJSON = function bower() {
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

CraftyGenerator.prototype.craftyFiles = function craftyFiles() {
  this.copy('libs/Crafty/_crafty.js', 'app/libs/Crafty/crafty.js');
  this.copy('libs/Crafty/_crafty.min.js', 'app/libs/Crafty/crafty.min.js');
};

CraftyGenerator.prototype.craftyDebugFiles = function craftyDebugFiles() {
  this.copy('libs/CraftyDebug/_craftyDebug.js', 'app/libs/CraftyDebug/craftyDebug.js');
  this.copy('libs/CraftyDebug/panels/_assets.js', 'app/libs/CraftyDebug/panels/assets.js');
  this.copy('libs/CraftyDebug/panels/_entities.js', 'app/libs/CraftyDebug/panels/entities.js');
};

CraftyGenerator.prototype.app = function app() {
  this.copy('scripts/_app.js', 'app/scripts/app.js');
  this.template('scripts/_game.js', 'app/scripts/game.js');
};

CraftyGenerator.prototype.writeIndex = function writeIndex() {
  var mainCssFiles = ['styles/normalize.css', 'styles/style.css'];

  this.indexFile = this.appendStyles(this.indexFile, 'styles/main.css', mainCssFiles);

  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/bower_components.js', ['bower_components/jquery/jquery.js'], null, 'app');

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/crafty.js', [
    'libs/Crafty/crafty.js'
  ], null, 'app');

  this.indexFile = this.appendScripts(this.indexFile, 'scripts/crafty_debug.js', [
    'libs/CraftyDebug/craftyDebug.js',
    'libs/CraftyDebug/panels/assets.js',
    'libs/CraftyDebug/panels/entities.js'
  ], null, 'app');

  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/components.js', ['scripts/compiled-components.js'], null, '.tmp');
  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/scenes.js', ['scripts/compiled-scenes.js'], null, '.tmp');
  this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/main.js', ['scripts/combined-scripts.js'], null, '.tmp');

  this.write('app/index.html', this.indexFile);

  this.copy('styles/normalize.css', 'app/styles/normalize.css');
  this.copy('styles/style.css', 'app/styles/style.css');
  //this.copy("_index.html", "app/index.html");
};

CraftyGenerator.prototype.install = function () {
  if (this.options['skip-install']) {
    return;
  }

  var done = this.async();
  this.installDependencies({
    skipMessage: this.options['skip-message'],
    skipInstall: this.options['skip-install'],
    callback: done
  });
};
