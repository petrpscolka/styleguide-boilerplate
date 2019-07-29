const path = require("path");
const {isEnv} = require("./gulpfile.js/lib/services");

module.exports = {
  mode: "production",
  output: {
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/js")],
        loader: "babel-loader"
      }
    ]
  },
  optimization: {
    minimize: isEnv("production")
  },
  devtool: (isEnv("development") && "source-map")
};
