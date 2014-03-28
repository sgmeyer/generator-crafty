generator-crafty
================

## Features
* CraftyJS project skeleton
* CraftyJS scaffolding for:
  * Scenes
  * Components

And it's an awesome Yeoman generator:
* Test server with live reloading
* Project building using Grunt
* etc...

## Decription

Yeoman.io generator for CraftyJS game engine.

## Prerequisite Installation (Node, NPM, and Yeoman)

* To use this generator you must have node.js and npm installed. To install node and npm go to (http://nodejs.org/).
* Installing Yeoman will install Grunt and Bower (http://www.yeoman.io)
* 
```
npm install -g yo
```

## Usage

Install `generator-crafty`:
```
npm install -g generator-crafty
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo crafty` and talk with Yeoman, he creates the project skeleton for you 

Now creating a new CraftyJS scene is as easy as running `yo crafty:scene MyScene`
```
You called the scene subgenerator with the argument MyScene.
   create app/scripts/scenes/MyScene.js
```

Now we can edit the just created scene, here's an example:
```
Crafty.scene('MyScene', function() {
  var Block = Crafty.e('2D, Canvas, Color')
    .attr({
      x: 100,
      y: 100,
      w: 50,
      h: 50
    })
    .color('rgb(20, 185, 40)');
}, function() {
  // destructor
});
```

And editing the `game.js` file:
```
'use strict';

var Game = {
  // Initialize and start our game
  start: function () {
    Crafty.load([ ], function () {

      // Start crafty and set a background color so that we can see it's working
      Crafty.init(400, 600);
      Crafty.background('#66D124');

      // Simply start splashscreen
      Crafty.scene('splash');
    });
  }
};

Game.start();
```

## Previewing your game

Now you can test your beautiful creation in the browser by running `grunt serve`. With live reloading you can edit your projects files and see the magic happen in your browser almost instantly, how cool is that?

## Build for distribution

Are you ready for liftoff? Run `grunt build` and check out the `dist` directory in your projects root.
