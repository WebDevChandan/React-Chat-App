// Global Variables: If a variables is initialized inside a function without being declared first will have Global Scope.
// funFruit(); //Initialized fruit variable first without being declared using funFruit() function.
// console.log(fruit);

// function funFruit() {
//   fruit = 'mangoes';
// }

//================ Local Scope ==============
// funFruit(); //Declared fruit variable using funFruit() function.
// //Accessing Local Variables.
// console.log(fruit); //fruit declared using var/let/const keyword returns Error: fruit is not defined

// function funFruit() {
//   //This variable has a local scope. Because it's declared inside function.
//   var fruit = 'mangoes'; //Variable declared inside funFruit() function
// }

//Local Function (having same rule as local Variable. Since fuction itself a variable)
globalFun();
// console.log(localFun(5, 3)); //returns Error: localFun is not defined
// console.log(gVar);     // getting result using Global Variable.

function globalFun() {
  function localFun(x, y) {
    return x + y;
  }
  // gVar = localFun(5, 3);
}
