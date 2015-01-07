/*
  gulpfile.js
  Copyright (c) 2014 Johnie Hjelm
  ===========
*/


/**
 * Compile, concat and Uglify Javascript
 */
var gulp         = require('gulp');
var package      = require('./package.json');
var uglify       = require('gulp-uglify');
var header       = require('gulp-header');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');


/*------------------------------------*\
  
  Banner

\*------------------------------------*/
var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.description %>\n' +
    ' * <%= package.homepage %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
  ].join('');


/*------------------------------------*\

  Scripts task

\*------------------------------------*/
gulp.task('scripts', function() {
  return gulp.src([
      './treadmill.js'
    ])
    .pipe(concat(
      'treadmill.js'
    ))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      package: package
    }))
    .pipe(gulp.dest('./'))
});


/*------------------------------------*\

  Default task

\*------------------------------------*/
gulp.task('default', ['scripts']);
