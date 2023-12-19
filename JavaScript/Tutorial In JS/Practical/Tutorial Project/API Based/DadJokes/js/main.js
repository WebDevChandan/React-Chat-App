const jokesState = document.querySelector('.jokes');
const nxtBtn = document.querySelector('.btn');




// const generateJokes = function (){

// After checking API returning resoponse by Default in HTML format using http GET method by the help of POSTMAN Tool. To get API data in JSON format using http GET method, we have to first set its Headers with the help of Object of object as value of method headers with Key: Accpet & Value: "application/json" to request server that we need data response in json format.
// const setHeader = {
	// headers: {
	// Accept: "application/json"
	// }
// }

// Here, fetch() method fetching api using http GET method. And By default this API returning data response in HTML format as per POSTMAN Tool
// fetch(`https://icanhazdadjoke.com/`, setHeader)
// .then((res)=>{				
//Fetch() method fetching api and returning a promise which wer are taking as it resolve using .then method						


// return res.json();				////Now using headers's value as object help in getting data in JSON Format. .json() method help to convert that Json data in JavaScript Object.

//Now to get the value: "Joke Data" of Key: Joke from the converted Api's data Object and print on the document.  We've to jump on the next .then method. To jump on to the next .then() method, I've to use return keyword to return api data. 	

// }).then((getJoke)=>{
	// jokesState.innerHTML=getJoke.joke;
// })
// .catch((error)=>{
// console.log(`The Error: ${error}`);
// })
// }
// nxtBtn.addEventListener('click',generateJokes);
// generateJokes();





						//---------------------------------------------------	 Using Async Await		----------------------------------------------------------
const generateJokes = async ()=>{

try{				//Error Handling in Async Await
const setHeader = {
	headers: {
	Accept: "application/json"
	}
}

const res = await fetch(`https://icanhazdadjoke.com/`, setHeader)

const getJoke =  await res.json();				//This one also going to return promise. So we've to wait.
jokesState.innerHTML = getJoke.joke;
	
}catch(error){
console.log(`The Error: ${error}`);
}
}
nxtBtn.addEventListener('click',generateJokes);
generateJokes();