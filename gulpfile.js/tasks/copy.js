// packages
const gulp = require("gulp");

// Copy static files
const copyTask = (src, dest) => {
  // give the function a name so it doesn't log as 'anonymous'
  const copy = done => {
    return gulp.src(src)
    .pipe(gulp.dest(dest));
  }
  
  return copy;
}

// exports
module.exports = copyTask;
