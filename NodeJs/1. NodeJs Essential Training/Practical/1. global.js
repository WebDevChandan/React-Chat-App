// In Node.js, the global object is called 'global' whereas 'window' is the globalobject for browser.
// So, console is the part of the global Object.

// Variable are scope to this file or this module.
/*
let hello = "Hello World from Node.js",
justNode = hello.slice(17);
console.log(`Who let ${justNode} out?`);
*/

/* 
// path module Imorted
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
*/

// To find what are those elements (properties or Methods) in global object of Node:
/*
for (let key in global) {
    console.log(key);
}
*/