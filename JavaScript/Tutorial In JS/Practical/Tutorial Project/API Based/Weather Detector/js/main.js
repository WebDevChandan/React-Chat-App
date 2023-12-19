const request = new XMLHttpRequest();					//Here, Created new instance of XMLHttpRequest Object as request. Now Request would be consider as XMLHttpRequest Object.
const searchData = document.getElementById('searchBar');

searchData.addEventListener('keypress', (event)=>{
	if(event.charCode==13){
		
		let cityData = searchData.value;
// Open is the method of request Object takes two arguments, call the API in 2nd argument & read it unig GET method in 1st argument
request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=c2dfc526698683ea92a05493015a5ab7&units=metric`);
// Using send method of request Object we can send the request to the owner of the API for the required data

request.send();
			
	}
});

// Here, we're going To GET the data as http response, as Window.onload event occur
request.addEventListener('load', ()=>{
	
	// Data would be in Pure JSON format. Use parse() method of JSON Object which convert it into JS Object by passing responseText() method of request Object as its argument.
	const getResponseObject = JSON.parse(request.responseText);
	
	//Got the Required Data from the API as JavaScript Object.
	// console.log(getResponseObject);
	
	let name = getResponseObject.name;
	let country = getResponseObject.sys.country;
	
	let dateObj = new Date();
	let currDate = dateObj.getDate();
	
	let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let currDay = days[dateObj.getDay()-1];
			
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let currMonth = months[dateObj.getMonth()];
	
	let currYear = dateObj.getFullYear();
	
	const temp = Math.round(getResponseObject.main.temp);
	const minTemp = Math.floor(getResponseObject.main.temp_min);
	const maxTemp = Math.ceil(getResponseObject.main.temp_max);
	const weather = getResponseObject.weather[0].description;


	// HTML COTNAINER REFERENCE
	const childContainer = document.querySelector('.child-container');
	
	// HTML DATA	
const htmlData = `
	<div class="data-box">
			<p class="city-country">${name}, ${country}</p>
			<p class="date-time	">${currDay} ${currDate} ${currMonth}, ${currYear}</p>
			<h1 id="temp">${temp}<sup>o</sup>C</h1>
			<p class="min-max">${minTemp}<sup>o</sup>C (min) / ${maxTemp}<sup>o</sup>C (max)</p>
			<p class="weather">${weather}</p>
	</div>
	`;
	
	// To Insert HTML Data under the container element at the exact position via its reference 
	
	childContainer.insertAdjacentHTML('beforeend', htmlData);
	/*insertAdjacentElement takes 2 arguments, First argument decide the position of the html 
	data according to the element container and second one takes reference of required html Data*/
	
})

