//1st way of importing myModules.js
/* 
const myModule = require("./myModules");
console.log(myModule.anything);
console.log(myModule.inc());
*/

// Another way of importing myModules.js
const { inc, dec, getCount } = require("./myModules");
// Now we can call the functions in few different times.
inc();
inc();
inc();

console.log(`the count is ${getCount()}`);
