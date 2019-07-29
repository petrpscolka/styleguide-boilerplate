// packages
const gulp = require("gulp");
const svgSprite = require('gulp-svg-sprite');
const plumber = require('gulp-plumber');

// SVG Doc.
// https://github.com/jkphl/svg-sprite

const config = {
  svgsprite: {
    watch: 'src/assets/toolkit/icons/**/*.svg',
    baseDir: 'src/theme/assets/icons/',   // <-- Set to your SVG base directory
    svgGlob: '**/*.svg',                  // <-- Glob to match your SVG files
    outDir: 'dist/assets/icons',     // <-- Main output directory
    config: {
      shape: {
        dimension: { // Set maximum dimensions
          maxWidth: 5000,
          maxHeight: 5000
        },
        spacing: { // Add padding
          padding: 0
        }
      },
      mode: {
        css: false,
        view: false,
        defs: false,
        symbol: {
          example: false,
          sprite: "../../icons/icons.svg"
        },
        stack: false
      }
    }
  },
};

function svgTask() {
  return gulp.src(config.svgsprite.svgGlob, {cwd: config.svgsprite.baseDir})
    .pipe(plumber())
    .pipe(svgSprite(config.svgsprite.config)).on('error', function(error){ console.log(error); })
    .pipe(gulp.dest(config.svgsprite.outDir))
}


// exports
module.exports = svgTask;
