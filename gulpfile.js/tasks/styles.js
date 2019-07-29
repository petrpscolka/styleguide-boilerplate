// packages
const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const {isEnv} = require("../lib/services");

// CSS task
function stylesTask() {
  return gulp.src([
      "./src/style.scss",          // Themes
      "./library/assets/scss/style-library.scss"  // Library
    ], {
      sourcemaps: isEnv('development')
    })
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./dist/css/"));
}

// exports
module.exports = stylesTask;
