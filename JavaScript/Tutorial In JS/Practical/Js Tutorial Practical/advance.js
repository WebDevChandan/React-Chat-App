// Event Bubbling & Event Capturing 
// const Parent = document.querySelector('.parent-div');
// const Child = document.querySelector('.child-div');

// Parent.addEventListener('click', ()=>{
	// alert('Hi!, This is Parent Div');
// });

// Child.addEventListener('click', ()=>{
	// alert('Hi!, This is Child Div');
	// event.stopPropagation();
// },true);

// HIGHER ORDER FUNCTION & CALLBACK FUNCTION
// const add = (a, b)=>{
	// return a + b ;
// }
// const substract = (a, b)=>{
	// return a - b ;
// }
// const multiply = (a, b)=>{
	// return a * b ;
// }

// const calc = (num1, num2, operator)=>{
	// return operator(num1, num2);
// }
// console.log(calc(5,4,add));
// console.log(calc(5,4,substract));
// console.log(calc(5,4,multiply));


// Function Currying
// sum = (num1)=>(num2)=>(num3)=> console.log(num1+num2+num3);

// sum(1)(2)(3);

// Without function currying
// function sum(num1, num2, num3){
	// console.log(num1+num2+num3);
// }
// sum(1,2,3);

// CallBack Hell:-
// setTimeout(()=>{
	// console.log('1st Work has Done');
		// setTimeout(()=>{
			// console.log('2nd Work has Done');
				// setTimeout(()=>{
					// console.log('3rd Work has Done');
						// setTimeout(()=>{
							// console.log('4th Work has Done');
								// setTimeout(()=>{
									// console.log('5th Work has Done');
						// },1000);
						// },1000);
				// },1000);
		// },1000);
// },1000);


// JSON CALL USING XMLHttpsRequest
// const request = new XMLHttpRequest();
// request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=chas&appid=c2dfc526698683ea92a05493015a5ab7&units=metric");
// request.send();

// To Get Response when some event Occur
// request.addEventListener('load',()=>{
	// console.log(request.responseText);
	// let gotObject = JSON.parse(request.responseText);
	// console.log(Object.entries(gotObject));
// });

// JSON
// const person = {
	// name: "Chandan",
	// age: 20,
	// present: true,
// };
// console.log(JSON.stringify(person));
// console.log(JSON.parse((JSON.stringify(person))));



// //----------------------------------------------------------------------------- PROMISE -----------------------------------------------------------------------------

// Task (Take fake API of Student consisting their Name, roll no, branch, gender, age etc.)
//Note: execute every statement after 2 sec
// 1. Roll No.
//2. Name & age.


// Create 'new Promise Object' using its constructor which passes an argument i.e. executer as callBack function takes 2 parameter i.e. resolve & reject function
//This is called Promise Produce. (Basically Producing Promises).
// const promiseObject1  = new Promise((resolve, reject)=>{
	// setTimeout(()=>{
		// let roll_no = [1,2,3,4,5];
	////	If able to Resolve the above instruction, use resolve function
		// resolve(roll_no);													//call resolve function by passing the required argument to fetch it.
		////If unable to resolve the above instruction, use reject function
		// reject('error because resolve not called');
	// },2000);
// });

// When we have to create new task, will always consider creating task as new Promise
// const getBioData = (acceptRollNo)=>{				//2. Getting value of Argument of getBioData and Passing in acceptRollNo as parameter
	// return new Promise((resolve, reject)=>{
		// //setTimeout(Handler, Time in ms, Argument);
	// setTimeout((acceptRollNo)=>{					//4. Passing acceptRollNo as Parameter
		// let bioData = {
			// Name: 'Chandan Kumar',
			// Age: 21
		// }
		// resolve(`My name is ${bioData.Name}, My Roll No. is ${acceptRollNo} and My Age is ${bioData.Age}.`);
	// }, 2000, acceptRollNo);							//3. Accepting acceptRollNo as argument
	// });
// };

// //To show the output/result of resolve function, we use .then() method
// //This is called Promise Consume (Consuming Promises)
// promiseObject1.then((roll_no)=>{											//Passing resolve argument to Get it.
	// console.log(roll_no);
	// //return keyword let Promise to execute/return another Promise. Return indicate that Second Promise is dependent on 1st Promise.
	// return getBioData(roll_no[0]);													//1. Getting value of roll_no (array) of index number 0 i.e. 1	
// }).then((printSecondResolve)=>{
	// console.log(printSecondResolve);
// }).catch((error)=>{
	// console.log(`Your Error: ${error}`);
// });




// //----------------------------------------------------------------------------- FETCH API -----------------------------------------------------------------------------
// fetch(`https://api.covid19api.com/summary`)
//Promise consume to Get Response
// .then((apiData)=>{
	// console.log(apiData);
	// return apiData.json();						// //Convert JSON data (API Data) into Js Object
// }).then((actualData)=>{
	// console.log(actualData);
	// const myCountryData = actualData.Countries[76];
	// document.querySelector('.fetch-api').innerHTML= `Our country ${myCountryData.Country}, currently having new Confirmed Cases are <b> ${myCountryData.NewConfirmed}</b>, New Death Cases are ${myCountryData.NewDeaths} & ${myCountryData.NewRecovered} Recovered. ${myCountryData.Country} having Total Confirmed Cases are ${myCountryData.TotalConfirmed} and  Total Death Cases are ${myCountryData.TotalDeaths}`;
// }).catch((error)=>{
// console.log(`The error: ${error} `);
// });




// //----------------------------------------------------------------------------- Async-Await -----------------------------------------------------------------------------

// Task (Take fake API of Student consisting their Name, roll no, branch, gender, age etc.)
// Note: execute every statement after 2 sec
// 1. Roll No.
// 2. Name & age.


// Create 'new Promise Object' using its constructor which passes an argument i.e. executer as callBack function takes 2 parameter i.e. resolve & reject function
// This is called Promise Produce. (Basically Producing Promises).
// const promiseObject1  = new Promise((resolve, reject)=>{
	// setTimeout(()=>{
		// let roll_no = [1,2,3,4,5];
////		If able to Resolve the above instruction, use resolve function
		// resolve(roll_no);													//call resolve function by passing the required argument to fetch it.
	////	If unable to resolve the above instruction, use reject function
		// reject('error because resolve not called');
	// },2000);
// });

//// When we have to create new task, will always consider creating task as new Promise
// const getBioData = (acceptRollNo)=>{				//2. Getting value of Argument of getBioData and Passing in acceptRollNo as parameter
	// return new Promise((resolve, reject)=>{
	////	setTimeout(Handler, Time in ms, Argument);
	// setTimeout((acceptRollNo)=>{					//4. Passing acceptRollNo as Parameter
		// let bioData = {
			// Name: 'Chandan Kumar',
			// Age: 21
		// }
		// resolve(`My name is ${bioData.Name}, My Roll No. is ${acceptRollNo} and My Age is ${bioData.Age}.`);
	// }, 2000, acceptRollNo);							//3. Accepting acceptRollNo as argument
	// });
// };


//// Promise Consumption using Async Await. This is where exactly Async-Await comes into play.
// async function getData(){					//Because of async function, This function is going to directly return a promise which passes either resolve or reject.

// try{
	

// //To fetch the data of 1st promise. We use await keyword, because the data in 1st promise returning after 2 sec. So, await keyword let function to wait till 2 sec then execute it. 
	// const rollNoData = await promiseObject1;		
	// console.log(rollNoData);
	// const bioDatas = await getBioData(rollNoData[0]);		
	// console.log(bioData);
	
	// return bioDatas;					//This instruction will go under pending state. Becuase of return keyword & calling its function as function expression it'll directly trying to return the data (bioDatas) of 2nd Promise that has already been set to execute after 2 sec while producing Second Promise.
// }catch(error){
	// console.log(`Your Error: ${error}`);
// }

// }
// const data = getData().then((repeatData)=>{
	// console.log(repeatData	);
// });
// .catch((error)=>{
	// console.log(`Your Error: ${error}`);
// });
// console.log(data);