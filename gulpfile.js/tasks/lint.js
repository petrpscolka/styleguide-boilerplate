const gulp = require("gulp");
const eslint = require("gulp-eslint");
// Lint scripts
function lintTask() {
  return gulp.src([
      "./library/assets/js/main.js",
      "./gulpfile.js"
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

module.exports = lintTask;