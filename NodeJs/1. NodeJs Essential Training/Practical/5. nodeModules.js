// Path Module
const path = require("path");
// Utilities Module
const util = require("util");
// v8 Module
const v8 = require("v8");

console.log(path.basename(__filename));

// Any string passing here, will appended to the dir path.
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

// it gives litter more info. about our file name.
util.log(path.basename(__filename));

util.log(v8.getHeapStatistics());