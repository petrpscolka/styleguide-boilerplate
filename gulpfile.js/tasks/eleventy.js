// packages
const cp = require("child_process");

// Eleventy
const eleventyTask = done => {
  cp.spawn("npx", ["eleventy", "--quiet"], {
    stdio: "inherit"
  });
  done();
}

// exports
module.exports = eleventyTask;
