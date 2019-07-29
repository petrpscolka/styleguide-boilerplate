// Load plugins
const gulp = require("gulp");

// import tasks
const components = require("./gulp-tasks/components.js");
const img = require("./gulp-tasks/images.js");
const js = require("./gulp-tasks/scripts.js");
const server = require("./gulp-tasks/browsersync.js");
const css = require("./gulp-tasks/styles.js");
const fonts = require("./gulp-tasks/fonts.js");
const clean = require("./gulp-tasks/clean.js");
const eleventy = require("./gulp-tasks/eleventy.js");
const w3c = require("./gulp-tasks/w3c.js");
const svgIcons = require("./gulp-tasks/svgicons.js");
const diff = require("./gulp-tasks/testing.js");

// Watch files
function watchFiles() {
  gulp.watch("./**/*.scss", css.build);
  gulp.watch("./src/assets/**/*.js", scripts);

  gulp.watch("./src/assets/img/**/*", images);
  gulp.watch("./src/assets/fonts/**/*", fonts.copy);
  gulp.watch("./src/assets/svg-icons/**/*", svgIcons.build);
  gulp.watch("./src/components/**/*.{njk,md}", components.copy);
  gulp.watch("./src/layouts/**/*.njk", components.copy);
  gulp.watch(
    [
      "./.eleventy.js",
      "./.eleventyignore",
      "./library/**/*.njk",
      "./library/**/*.md"
    ],
    gulp.series(eleventy.build, w3c.build)
  );
}

// define tasks
const scripts = gulp.series(js.lint, js.build);
const images = gulp.series(gulp.parallel(img.copy, img.resize));
const watch = gulp.parallel(watchFiles, server.init);
const validate = gulp.series(w3c.build);
const test = gulp.series(diff.build);
const build = gulp.series(
  clean.dist,
  gulp.series(
    gulp.series(components.copy),
    gulp.parallel(eleventy.build, fonts.copy, css.build, svgIcons.build, images, scripts),
    gulp.series(w3c.build)
  )
);

// expose tasks to CLI
exports.build = build;
exports.watch = watch;
exports.validate = validate;
exports.default = build;
exports.test = test;
