var gulp = require('gulp');

var modules = {
    gulp: gulp,
    browserify: require('gulp-browserify'),
    runSequence: require('run-sequence').use(gulp),
    uglify: require('gulp-uglify'),
    concat: require('gulp-concat'),
    sourceMaps: require('gulp-sourcemaps'),
    sass: require('gulp-sass'),
    dynamicRouting: require('./bower_components/foundation-apps/bin/gulp-dynamic-routing'),
    rimraf: require('rimraf') // rm -rf for nodejs
};

module.exports = modules;