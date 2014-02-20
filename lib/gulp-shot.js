#!/usr/bin/env node

/*
 * gulp-shot
 * https://github.com/bernardog/gulp-shot
 *
 * Copyright (c) 2014 Bernardo Gurgel
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander');

program.version('0.0.1');

program
  .command('new <project>')
  .action(function (project) {
    console.log('Building %s', project);
  });

program.parse(process.argv);