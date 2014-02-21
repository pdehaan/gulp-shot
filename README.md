# GulpShot [![NPM version](https://badge.fury.io/js/gulp-shot.png)](http://badge.fury.io/js/gulp-shot)

A simple way to kick start gulp based web app projects. 

## Getting Started

First you need to install the module running `npm install -g gulp-shot`

Then to create a new project you just need to run the following:

```shell
gulpshot new my_awesome_project
```

### Features

- CSS Autoprefixing
- Automatically minify css files
- Automatically compile Sass
- Automatically compile CoffeeScript
- Automatically lint scripts via jsHint
- Automatically uglify script files
- Automatically optimize image files (.jpg, .png, .gif)
- Watches for changes
- Initialize a preview server with LiveReload support
- Generates a optimized build
- Bundles js modules via browserify
- SOON: Runs Mocha tests

### Structure

A sample project strucutre would be:

```
|-- app
|  |-- vendors (bower_components)
|  |-- styles
|  |  |-- style_one.scss
|  |  |-- style_two.scss
|  |-- scripts
|  |  |-- script_one.coffee
|  |  |-- script_two.coffee
|  |-- images
|  |  |-- background.png
|  |-- index.html
|-- dist
|  |-- styles
|  |  |-- main.min.css
|  |-- scripts
|  |  |-- scripts.min.js
|  |-- images
|  |-- index.html
|-- node_modules
|-- test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Bernardo Gurgel Filho 
Licensed under the MIT license.
