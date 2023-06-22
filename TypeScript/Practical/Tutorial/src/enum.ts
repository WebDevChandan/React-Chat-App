// Enums: A list of related constants
//Example:-
// const small = 1;
// const medium = 2;
// const large = 3;

/*In Enum, we basically follow PascalCase
By default, compiler implicitly set value as: {0, 1, 2}*/
// enum Size{ Small, Medium, Large }

//String enum.  All memebers should be either implicitly or Explicitly setted their value(if it's other than number)
// enum Size { Small = 's', Medium = 'm', Large = 'l' }

//Explicitly setting value to this enum.
// enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize);  //Result: 2


//To make compiler generate more optimize code:
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize);  //Result: 2