// packages
const copy = require("./copy");
const path = require("path");

// Copy fonts
const fontsTask = copy(
  path.resolve("./src/assets/fonts/**.*"),
  path.resolve("./dist/fonts/")
);

// exports
module.exports = fontsTask;
