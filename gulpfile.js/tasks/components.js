// packages

const gulp = require("gulp")
const merge = require('merge-stream');
const del = require('del');
const rename = require('gulp-rename');


// Copy fonts
function componentsTask() {

  // clean files first
  del.sync([
    './library/components/includes/*', '!./library/components/includes/lib/**',
    './library/components/layouts/*', '!./library/components/layouts/lib/**',
    './library/pages/*', '!./library/pages/default/**'
  ]);

  var includes = gulp
    .src(['./src/components/**/*.njk', '!./src/components/**/*.test.njk'])
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./library/components/includes/'));

  var testing = gulp
    .src('./src/components/**/*.test.njk')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./library/pages/testing/'));

  var pagesPatterns = gulp
    .src('./src/components/**/*.md')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./library/pages/patterns'));

  var pagesExamples = gulp
    .src('./src/layouts/**/*.njk')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./library/pages/examples'));


  return merge(includes, testing, pagesPatterns, pagesExamples);

}

// exports
module.exports = componentsTask;
