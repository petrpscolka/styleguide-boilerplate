// packages
const gulp = require("gulp");
const w3cjs = require("gulp-w3cjs"); // https://www.npmjs.com/package/gulp-w3cjs

// w3c validation
function w3cTask() {
  return gulp.src("./dist/templates/*.html")
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
}


// exports
module.exports = w3cTask;
