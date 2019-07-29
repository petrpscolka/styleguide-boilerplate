const gulp = require("gulp");
const scripts = require("./scripts");
const images = require("./images");
const fonts = require("./fonts");
const components = require("./components");
const svgIcons = require("./svgicons");
const eleventy = require("./eleventy");
const browsersync = require("./browsersync");
const styles = require("./styles");
const w3c = require("./w3c");

const watchTask = done => {

  gulp.watch("./**/*.scss", styles);
  gulp.watch("./src/lib/lib-assets/js/**/*", scripts);

  gulp.watch("./src/assets/js/**/*", scripts);
  gulp.watch("./src/assets/img/**/*", images);
  gulp.watch("./src/assets/fonts/**/*", fonts);
  gulp.watch("./src/assets/svg/**/*", svgIcons);
  gulp.watch("./src/components/**/*.{njk,md}", components);
  gulp.watch(
    [
      "./.eleventy.js",
      "./.eleventyignore",
      "src/lib/**/*.njk",
      "./src/theme/patterns/**/*",
      "./src/theme/templates/**/*",
      "./library/**/*.njk",
      "./library/**/*.md"
    ],
    gulp.series(eleventy, w3c)
  );

  done();

};

module.exports = watchTask;
