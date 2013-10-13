generator-crafty
================

## Features

* CSS minification
* Built-in preview server with LiveReload
* CraftyBootstrap scaffolding for more information (https://github.com/ahilles107/CraftyBoilerplate).

## Decription

Yeoman.io generator for Crafty.js game engine.

This is currently not deployed to the Node Package Manager (NPM).  Until this is ready for primetime feel free to link this locally.  The following steps will setup your Craft.js scaffolding.  The scaffolding is based on the CraftyBoilerplate (https://github.com/ahilles107/CraftyBoilerplate).

## Installation (Currently not deployed to Node Package Manager)

- Make sure you have yo, grunt, node and NPM installed.
- Open the root directory of `generator-crafty`
- Install the generators dependencies by typing the command `npm install`.
- Type the command `npm link`.  This will link the Yeoman generator to your local NPM.

## Usage - Setup Game Scaffolding
- Create a new game directory anywhere you'd like.  By default the game name will be the name of the directory.
- With your terminal go to the game directory.
- Type the command `yo crafty`
- If you want to override your game name Yeoman will ask you otherwise it defaults to the root directoy name.

## Usage - Preview Server and LiveReload

To build and run your application locally you can use the included Grunt setup.  Here's how to be a terminal ninja.

- open up the terminal.
- Navigate to your games root directory.  This directory will contain the Gruntfile.js file.
- You can use the `grunt server` command to clean, minify/copy/build, run node server, open default browser.