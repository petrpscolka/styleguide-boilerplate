// packages
const browsersync = require("browser-sync").create();

// BrowserSync
const bsTask = done => {
  browsersync.init({
    server: {
      baseDir: "dist/"
    },
    files: [
      "./dist/css/main.min.css",
      "./dist/css/pattern-library.min.css",
      "./dist/js/main.bundle.js",
      "./dist/**/*.{html, xml}"
    ],
    port: 3000,
    // open: false
  }, done);
}

// BrowserSync Reload
function reload(done) {
  browsersync.reload();
  done();
}

// exports
module.exports = bsTask;
