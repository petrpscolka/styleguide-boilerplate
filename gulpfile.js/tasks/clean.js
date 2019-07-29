// packages
const del = require("del");

// Clean
const cleanTask = done => del(["./dist/"]);

// exports
module.exports = cleanTask;
