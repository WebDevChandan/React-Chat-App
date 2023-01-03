//============= ⭐Variable, Function & Class Declaration always get hoisted⭐ ==================
// Variable Declaration Hoisting
// fruit = 'mango';
// console.log(fruit);
// var fruit; // returns 'mango'

// Function Declaration Hoisting
// catName('Tiger');
// function catName(name) {
//   console.log(`My cat's name is ${name}`);
// }
// /*
// The result of the code above is: "My cat's name is Tiger"
// */

//============= ⭐Variable Initialization doesn't get hoisted⭐ ==================
// console.log(fruit);  // 2nd, This statement get executed. 'fruit' will logged 'undefined'
//Execution Process: 1st var fruit; get declared with default value 'undefined' due to hoisting
// var fruit = 'mango';  //3rd string 'mango' will get initialize into fruit variable.

// console.log(fruit); // 2nd, This statement get executed. Throw an Reference Error: 'fruit can't access before initialization
// // Execution Process: 1st let fruit; get declared due to hoisting but without any default value
// let fruit = 'mango'; //3rd Initiallization will not executed because error already thrown.

// console.log(fruit); // 2nd, This statement get executed. Throw an Reference Error: 'fruit can't access before initialization
// // Execution Process: 1st const fruit; get declared due to hoisting but without any default value
// const fruit = 'mango'; //3rd Initiallization will not executed because error already thrown.

// console.log(fruitVar); //returns undefined
// fruitVar = 'mango'; //This initalization statement doesn't get executed at the top.
// var fruitVar;

// let fruitLet;
// console.log(fruitLet); //returns undefined
// fruitLet = 'mango'; //This initalization statement doesn't get executed at the top.

// const fruitConst;
// console.log(fruitConst); //returns Error: Missing initializer in const declaration
// fruitConst = 'mango'; //This initalization statement doesn't get executed at the top.

//============= ⭐Var Hoisting⭐ ==================
// Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.
// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num; // Declaration
// num = 6; // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.

// The same thing happens if we declare and initialize the variable in the same line.
// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.

// If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in ReferenceError exception.
// console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`. or num is not defined
// num = 6; // Initialization
// var num = 6; If we declare num with var, we'll get undefined because of hoisting.

// Note however that initialization also causes declaration (if not already declared). The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.
// a = 'Cran'; // Initialize a
// b = 'berry'; // Initialize b
// console.log(a + b); // 'Cranberry'

//============= ⭐ let and const Hoisting ⭐ ==================
// console.log(numVar); // undefined
// var numVar = 6; // Initialization and declaration with var

// try {
//   console.log(numLet); // Cannot access 'numConst' before initialization
//   let numLet = 6; // Initialization and declaration with let
// }
//  catch (err) {
//   console.log(err); //ReferenceError: Cannot access 'numLet' before initialization
// }

// console.log(numConst); // Cannot access 'numConst' before initialization
// const numConst = 6; // Initialization and declaration with const
