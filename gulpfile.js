'use strict';

// Dependencies

var gulp = require('gulp');
var del = require('del');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true});
var wiredep = require('wiredep').stream;

// Custom gulp config

var config = require('./gulp.config')();

// PostCSS plugins

var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var precss = require('precss');

// Gulp tasks

// help - shows available gulp tasks

gulp.task('help', $.taskListing);

// default gulp task

gulp.task('default', ['help']);

// css - runs css through postCSS plugins

gulp.task('css', function () {
  log('CSS processing...');

  var processors = [
    precss,
    autoprefixer({browsers: ['last 3 versions']}),
    mqpacker
  ];

  return gulp
    .src(config.indexCss)
    .pipe($.postcss(processors))
    .pipe(gulp.dest(config.assetsStylesFolder));
});

// inject-css - adds links to css files to head section of index.html

gulp.task('inject-css', ['css'], function () {
  log('Wire up css files into the html');

  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.styles), {addRootSlash: false}))
    .pipe(gulp.dest(config.root));
});

// css-watching - watches for changes in css files

gulp.task('css-watching', function () {
  log('Watch css files for changes');

  gulp.watch([config.sourcesStyles], ['css-import', 'css']);
});

// css-import - import all css file to index.css

gulp.task('css-import', function () {
  log('Import CSS partials to main css file');

  return gulp
  .src(config.indexCss)
  .pipe($.inject(gulp.src([
    config.sourcesStyles,
    '!' + config.indexCss
  ],
  {read: false}), {
    transform: function (filePath) {
      filePath = filePath.replace('sources/app/', '');
      return '@import \'' + filePath + '\';';
    },
    starttag: '/*injector*/',
    endtag: '/*endinjector*/',
    addRootSlash: false
  }))
  .pipe(gulp.dest(config.app));
});

// inject-bower - adds links to bower components' css and js files to index.html

gulp.task('inject-bower', function () {
  log('Wire up bower files into the html');

  return gulp
    .src(config.index)
    .pipe(wiredep({
      directory: config.bc
    }))
    .pipe(gulp.dest(config.root));
});

// inject-js - adds links to js files to index.html

gulp.task('inject-js', function () {
  log('Wire up js files into the html');

  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.sourcesScripts), {addRootSlash: false}))
    .pipe(gulp.dest(config.root));
});

// code-analizing - checks js code style and errors

gulp.task('code-analizing', function () {
  log('Analyzing source with JSHint and JSCS');

  return gulp
    .src(config.scripts)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));
});

// helpers

function log (msg) { // console output
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}
