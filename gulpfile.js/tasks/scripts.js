const gulp = require("gulp");
// packages
const webpack = require("webpack");
const webpackconfig = require( "../../webpack.config");
const webpackstream = require("webpack-stream");

// Transpile, concatenate and minify scripts
function scriptsTask() {
  return gulp.src(["./library/assets/js/main.js"])
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack
      .pipe(gulp.dest("./dist/js/"))
}

// exports (Common JS)
module.exports = scriptsTask;
