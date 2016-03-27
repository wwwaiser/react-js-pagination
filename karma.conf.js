var webpack = require("webpack");

module.exports = function (config) {
  config.set({
    browsers: [ "jsdom" ], //run in Chrome
    singleRun: false, //just run once by default
    autoWatch: true,
    frameworks: [ "mocha" ], //use the mocha test framework
    files: [
      "tests.webpack.js" //just load this file
    ],
    plugins: [ "karma-chai", "karma-mocha",
      "karma-sourcemap-loader", "karma-webpack",
      "karma-mocha-reporter", "karma-jsdom-launcher"
    ],
    preprocessors: {
      "tests.webpack.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ "mocha"], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: "inline-source-map", //just do inline source maps instead of the default
      module: {
        loaders: [
          { exclude: /node_modules/, test: /\.js$/,  loader: "babel-loader" }
        ],
      }
    },
    webpackServer: {
      noInfo: true //please don"t spam the console when running in karma!
    },
  });
};
