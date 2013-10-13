generator-crafty
================

Yeoman.io generator for Crafty.js game engine.

This is currently not deployed to the Node Package Manager (NPM).  Until this is ready for primetime feel free to link this locally.  The following steps will setup your Craft.js scaffolding.  The scaffolding is based on the CraftyBoilerplate (https://github.com/ahilles107/CraftyBoilerplate).

1. Make sure you have yo, grunt, node and NPM installed.
2. Open the root directory of 'generator-crafty'
3. Type the command 'npm link'.  This will link the Yeoman generator to your local NPM.
4. Create a new game directory anywhere you'd like.  By default the game name will be the name of the directory.
5. With your terminal go to the game directory.
6. Type the command 'yo crafty'
7. If you want to override your game name Yeoman will ask you otherwise it defaults to the root directoy name.

To build and run your application locall you can use the included Grunt setup.  Here's how to be a terminal ninja.

1. open up the terminal.
2. Navigate to your games root directory.  This directory will contain the Gruntfile.js file.
3. You can use the 'grunt server' command to clean, minify/copy/build, run node server, open default browser.