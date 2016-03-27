var fs = require("fs");
var babel = require("babel");
var mkdirp = require("mkdirp");

mkdirp("dist", function(err) {
  fs.writeFileSync("./dist/Pagination.js", babel.transformFileSync("src/components/Pagination.js", {}).code);
  fs.writeFileSync("./dist/Page.js", babel.transformFileSync("src/components/Page.js", {}).code);
});
