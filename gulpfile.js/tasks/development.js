const gulp = require("gulp");
const eleventy = require("./eleventy");
const w3c = require("./w3c");
const lint = require("./lint");
const scripts = require("./scripts");
const styles = require("./styles");
const svgIcons = require("./svgicons");
const images = require("./images");
const fonts = require("./fonts");
const clean = require("./clean");
const components = require("./components");
const watchFiles = require("./watchFiles");
const browsersync = require("./browsersync");

const devTask = gulp.series(
  clean,
  components,
  gulp.parallel(
    eleventy,
    fonts,
    styles,
    svgIcons,
    images,
    gulp.series(lint, scripts)
  ),
  w3c,
  watchFiles,
  browsersync
);

module.exports = devTask;