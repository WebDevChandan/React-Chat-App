// ----------------------------				ES6 Features			-------------------------------
// const Me = {
// 	fName:"Chandan",
// 	lName:"Kumar",
// 	Age:20
// }
// let {fName, lName, Age, Branch="CSFE"}= Me;
// console.log(fName);

// Object PROPERTIES_____________
// Dynamic Properties
// let myName = "Chandan";
// const Me = {
// [myName]:`Hey, ${myName} How are you!`,
// age:`My Age is ${[10+10]}`,
// [10+10]:`Is my Age`
// }
// console.log(Me);

//Key & Value Both are same
// let myName = "Chandan";
// let age = 20;
// const Me = {
// myName,
// age
// }
// console.log(Me);

// SPREAD OPERATORS_____________
// const colors = ['red', 'blue', 'green'];
// After some time, I realise I need an array having 2 more colors along with the abocolors
// const favColors = ['red', 'blue', 'green', 'black', 'yellow'];
// const favColors = [...colors, 'black', 'yellow'];
// console.log(favColors);

// REST OPERATORS_____________
// ((b, c, ...a)=>{
	// console.log(`${b} ${c}`);
	// console.log(a);
	// console.log(a[0]);
	// console.log(a.length);
	// console.log(a.indexOf(2));
// }	)
// (1,2,3,5,6);

// Export and Import (Modules)_____________
// Note: We can't use this feature without opening server.
//Export__________
//Ways of exporting codes from one JS file to other JS file.
//[1st way]
// const person = {
// 	name: "Chandan"
// }
//exporting the above person Object to another JS file.
//Note: We can only make a single components as export default in a single JS file.
// export default person;

//[2nd way] (using export keyword just before the code we want to export)
// export let hello = ()=> console.log("hello");
// export let data = 10;

//Import__________
//We've to use the import code to another JS file to see the result.
//[1st way] (importing exported default module)
// import ps from './es6-remaining.js';
// Note: We can import it with any name we want without using as Keyword.

//[2nd way]
// import {hello} from '/es6-remaining.js';
// import {data} from '/es6-remaining.js';
//hello();
// console.log(data);

//[3rd way]
// import {data as da} from '/es6-remaining.js';
//hello();
//console.log(da);

//[4th way] (If we're willing to import multiple components from a single JS file)
// import {hello, data as da} from '/es6-remaining.js';
//hello();
//console.log(da);

//[5th way] (If we're willing to import tremendous amount of components from a single js file, then we can create an object of all the exported modules of that file and access it like dot notation of object properties.)
// import * as bundle from '/es6-remaining.js';
//bundle.hello();
//console.log(bundle.data);


// ----------------------------				New Features after ES7			-------------------------------
// 1. Array.prototype.includes
// const colors = ['red', 'blue', 'black', 'green'];
// console.log(colors.includes('red'));

// 2.	Exponentiation Operator
// console.log(2**3);


// ---------------------------				New Features after ES8			------------------------------
// 1.	String Padding
// const bio = `Chandan`;
// console.log(bio.padStart(10));

// 2.	Object.value
// const bio = {
	// name: `Chandan`,
	// age: 20
// };
// console.log(Object.entries(bio));
// console.log(Object.entries(bio)[1]);

// 3.	Spread Properties

// const bio = {
	// name: `Chandan`,
	// age: 20
// };
// const myBio = {...bio, Branch: 'CSFE'}
// console.log(myBio);


// ---------------------------------				New Features after ES9			------------------------------------
// 1. Array.{flat, flatMap}
// const name = ['Chandan','Kumar','Abhishek', ['Dog', 'Cat', 'Lion', ['Delhi', 'Mumbai', 'Goa']]];
// console.log(name);
// console.log(name.flat());
// console.log(name.flat(Infinity));