// FUNCTION WITH Function EXPRESSION
// function multiply(table){
	
// for(var i=1;i<=10;i++){
 // show ='<br>'+ table + " x " + i + " = " + table*i;
 // show =`<br> ${table} x ${i} = ${table * i}`;
// document.write(show);
// }

// }
 // multiply(5);


//FAT ARROW FUNCTION
// const total = ()=> `sum of two nos. is ${(a=50) + (b=50)}`;
// document.write(total());


// VARIABLE KEYWORDS IN JAVASCRIPT VAR, CONST, LET
// const name = 'Chandan';
// document.write(name);

// name= 'Kumar';
// document.write(name);


// function biodata(){
	// const fName = 'Chandan';
	// document.write('<br>'+fName+'<br>');
	
	// if(true){
		// let lName = 'Kumar';
	// document.write('<br>'+fName);
	// document.write('<br>'+lName+'<br>');
	// }
	
	// document.write('<br>'+fName);
	// document.write('<br>'+lName);
	
// }
	// document.write('<br>'+fName+'<br>');
// biodata();



		// CALLBACK Function
		// const per1 = (friend, callBackfn) =>{
			// document.write(`Hey, What's Up ${friend}? <br>`);
			// callBackfn();
		// }
		
		// const per2 = ()=>{
			// document.write(`Wait, I call you Back!`);
		// }
		
		// per1(`Chandan`, per2);			//Passing `Chandan`, per2 as Argument		





// ARRAY IN JAVASCRIPT
// var allNames = ['Chandan', 'Kumar', 'Prafful', 'Amar'];
// document.write(allNames[allNames.length-1]);

// var allNames = ['Chandan', 'Kumar', 'Prafful', 'Amar'];
// We are going to use for loop to get all data inside an array at once.
// for(var i=0; i<allNames.length; i++){
// document.write('<br>'+ allNames[i]);	
// }

// ARRAY USING FOR of LOOP (INTRODUCE IN ES6)
// var allNames = ['Chandan', 'Kumar', 'Prafful', 'Amar'];
// for(let elements of allNames){
// document.write('<br>' + elements);	
// }

// ARRAY USING forEach LOOP (INTRODUCE IN ES6)
// var allNames = ['Chandan', 'Kumar', 'Prafful', 'Amar'];
// allNames.forEach((element, index, array)=>{
	// document.write('<br>' + element);
// })


// CHALLANGE TIME:
// 1. ADD DEC AT THE END OF THE ARRAY
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const gtIndx = months.indexOf('march');
// document.write(gtIndx);

// const updRslt = months.splice(gtIndx, 1, 'October' );
// if(gtIndx !=-1)
	// document.write(months);
// else
	// document.write("Element doesn't found");

// 2. DELETE June FROM AN ARRAY
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const gtIndx = months.indexOf('June');
// const updRslt = months.splice(gtIndx, Infinity );
// if(gtIndx !=-1)
	// document.write(months);
// else
	// document.write("Element doesn't found");



// const months = ['Jan', 'march', 'April', 'June', 'July'];
// months.pop('June');
// document.write('<br>' + months);

// ARRAY.prototype.indexOf() METHOD
// const arr = ['Chandan', 'Kumar', 'Singh', 'Abhishek', 'Kumar'];
// document.write(arr.includes('Kumar', 2));

// ARRAY.prototype.find() & findIndex() METHOD
// const prices = [200, 300, 350, 400, 450, 500, 600];
// Let I wanna buy clothes having prices less than < 400.

// const new_prices = prices.find((curr_elment, index, array)=>{ 
// return curr_elment<100 ;										//Function Expression
// })					
// document.write(new_prices);

// ARRAY.prototype.filter() METHOD
// const prices = [200, 300, 350, 400, 450, 500, 600];
// const new_prices = prices.filter((curr_elment, index, array)=> curr_elment<400);
// console.log(new_prices);

// array.prototype.sort()
// const months = [1, 2, 3, 4, 5, 6, 7, 8 , 9]; 
// console.log(months.sort());


// Map Property of Array
// const original_array = [1, 4, 9, 14, 15];
// const newArray = original_array.forEach((curr_elment, index, array)=>{
	 // return `Index No: ${index} and the value is ${curr_elment} of this ${array} <br> `;
// });
	// document.write(newArray );
	

// Find the square root of each element in an array?
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((curr_elment)=> Math.sqrt(curr_elment));
// document.write(arrSqr);

// MULTIPLY EACH Element BY 2 AND RETURN ONLY THOSE ELEMENTS WHICH ARE GREATER THAN 10
// let arr = [2, 3, 4, 6, 8];
// let new_arr  = arr.map((curr_elment) =>curr_elment *2).filter((curr_elment)=> curr_elment>10).reduce((accumulate, curr_elment)=> accumulate+= curr_elment);
// document.write(new_arr);

// REDUCE METHOD
// let arr = [3,5,6];
// let new_arr = arr.reduce((Acumulator, curr_elment, index, array)=>{
	// return Acumulator+= curr_elment;
// },10);
// document.write(new_arr);

// Fatten Array
// const arr = [						//arrays of an array - 2D array
		// ['zone1', 'zone2'],
		// ['zone3', 'zone4'],
		// ['zone5', 'zone6'],
		// ['zone7', ['zone8', 'zone9']]
// ]

// const new_arr = arr.reduce((accumulate, curr_elment)=>{
	// return accumulate.concat(curr_elment);
// })
// console.log(new_arr);



