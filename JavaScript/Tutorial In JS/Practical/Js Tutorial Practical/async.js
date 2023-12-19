//-------------------------------------------------- 				Asynchronous JavaScript 				----------------------------------
// HOSITING
// console.log(myName);
// let myName = "Chandan";
// myName= "Chandan";

// LEXICAL SCOPING
// let a = " Hi!";

// const first = ()=>{
	// let b = " How are You?";
	// const second = ()=>{
		// var c  = " This is Chandan.";
	// }
		// console.log(a + b + c);
	// second();
// }
// first();

// Closure in JavaScript
// let c = 10;
// const outerFun = (a)=>{
	// let b  = 10;
	// const innerFun = ()=>{
		// let sum = a+b+c;
		// console.log(`The sum of Two Number is ${sum}`);
	// }
	// return innerFun;
// }
// let inner = outerFun(5);
// console.dir(inner);
// inner ();

// Synchronous Vs Asynchronous JavaScript
// const fun2 = ()=>{
	// setTimeout(()=>{
	// console.log('This is Function-2');		
	// }, 2000);
// }
	// const fun1 =()=>{
		// console.log('Thsi is Function-1');
	// fun2();
	// console.log('This is Function-1 Again');
	// }

// fun1();			//This Function will Call First becuase, this lying at Global Scope