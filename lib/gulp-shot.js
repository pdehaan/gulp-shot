#!/usr/bin/env node

/*
 * gulp-shot
 * https://github.com/bernardog/gulp-shot
 *
 * Copyright (c) 2014 Bernardo Gurgel
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander'),
fs          = require('fs'),
ncp         = require('ncp').ncp,
exec        = require('child_process').exec;

ncp.limit = 16;

program.version('0.0.1');

program
  .command('new <project>')
  .action(function (project) {
    exec('which npm', function (err, stdout) {
      if (err){ throw err; }
      var path = stdout.split('/').splice(1,2).map(function(n){return '/' + n;}).join('') + '/lib/node_modules/gulp-shot/app';
      fs.mkdirSync(project);
      ncp(path, ('./%s', project), function (err) {
        if(err){return console.error(err);}
        exec(('cd %s', project), function () {
          exec('npm install', function() {
            console.log('Project created. Have a happy coding!');
          });
        });
      });
    });
    // fs.exists(path, function (exists) {
    //   console.log(exists);
    // });
    // creates the project folder

  });

program.parse(process.argv);