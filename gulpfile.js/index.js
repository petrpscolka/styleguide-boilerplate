// Load plugins
const gulp = require("gulp");
const requireDir = require("require-dir");

const tasks = requireDir("./tasks");
if(!tasks.default) {
  tasks.default = tasks.build;
}

module.exports = tasks;
