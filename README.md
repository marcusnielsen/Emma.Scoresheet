emma-scoresheet
===============
European mobile media association scoresheet.

This is a pet project of mine where I will try to make a small portal for scoring car sound on EMMA competitions.

I will try to use MEAN stack best practices as done by others.

Current status
--------------
* Gulp tasks are stable.
* Project can be deployed to heroku (if you set up a mongoDB with an environment variable) or locally.
* The project will seed data so you can easily see the current state of the product.

* The project is still not yet read to demo.
* No tests done yet.

Prerequisites
------------
###Core
* Git.
* Node.js.
* MongoDB.

###NPM global packages
* Express.
* Gulp.
* Browserify.
* Napa.
* Mocha.

To install
----------
* Install the prerequisites.
* Git clone this repository.
* Run npm install.
* Start with 'node server/server.js' or with 'gulp watch' for development mode.

About the code
--------------
###Development-cycle tools
* Livereload.
* Nodemon.
* Seedable repository.

###Build tools
* Gulp. (Note that currently minification of JS is turned off until needed due to bad support in toolchain.)
* Browserify.

###Structure
Module-based.

###Features
* Localized.
* Secure login via passport.
* Change bootswatch theme in runtime.
* Configurable modules.
* Scoresheet forms are built from JSON. (Not yet active, but see previous version for the working demo product.)
* Each form input type is rendered as its own directive. (As above.)
