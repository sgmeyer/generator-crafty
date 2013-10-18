generator-crafty
================

## Features

* JavaScript minification
* Built-in preview server with LiveReload
* CraftyBootstrap scaffolding for more information (https://github.com/ahilles107/CraftyBoilerplate).

## Decription

Yeoman.io generator for Crafty.js game engine.

You can install this generator using the Node Package Manager (npm).  The following steps will setup your Craft.js scaffolding.  The scaffolding is based on the CraftyBoilerplate (https://github.com/ahilles107/CraftyBoilerplate).

## Prerequisite nstallation (Node, NPM, and Yeoman)

* To use this generator you must have node.js and npm installed.  To install node and npm go to (http://nodejs.org/).
* Installing Yeoman will install Grunt and Bower (http://www.yeoman.io)
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

Run `yo crafty`:
```
yo crafty
```

## Previewing Gaming

Run game in local server with live preview.  Run command in root directory of your game:
```
grunt server
```
or
```
grunt
```


## Minify and build game

```
grunt build
```
