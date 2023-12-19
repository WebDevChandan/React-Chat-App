// new Date() METHOD
	// let currDate = new Date(); //constructor
	// document.write(currDate.toLocaleString());

// Date.now() METHOD
	// document.write(Date.now());
	
// new Date(year, month ,day, hour, minute, second, and millisecond)METHOD
	// let myDate = new Date(1999, 9, 9, 23, 15, 30, 0);
	// document.write(myDate.toLocaleString());
	
// new Date(dateString) METHOD
	// let myDate = new Date("October 9, 1999 11:15");
	// document.write(myDate.toLocaleString());
	
// new Date(milliseconds) METHOD
	// let currDate = Date.now();
	// function myDate(milliDate){
	// document.write(new Date(milliDate*2).toLocaleString());
	// }
	// myDate(currDate);
	
// ---------------Dates METHOD------------------------
// How to get individual date
	// const currDate = new Date();
	
	// document.write(currDate.toLocaleString() + "<br>");
	// document.write(currDate.getFullYear() + "<br>");
	// document.write(currDate.getMonth() + "<br>");
	// document.write(currDate.getDate() + "<br>");
	// document.write(currDate.getDay() + "<br>");
	
// How to set individual date
	// const currDate = new Date();
	
	// document.write(currDate.toLocaleString() + "<br>");
	// document.write(currDate.setFullYear(2021) + "<br>");
	// document.write(currDate.setFullYear(2021, 10, 9) + "<br>");
	// document.write(currDate.setMonth(9) + "<br>");
	// document.write(currDate.setDate(9) + "<br>");
	// document.write(currDate.setDay(3) + "<br>");
	
	
	
// ---------------- TIME METHOD----------------------
//How to get the individual Time
		// const currTime = new Date();
		
		// document.write(currTime.getTime() + "<br>");
		// document.write(currTime.getHours() + "<br>");
		// document.write(currTime.getMinutes() + "<br>");
		// document.write(currTime.getSeconds() + "<br>");
		// document.write(currTime.getMilliseconds() + "<br>");
		
//How to get the individual Time
		// const currTime = new Date();
		
		// document.write(currTime.setTime() + "<br>");
		// document.write(currTime.setHours(5) + "<br>");
		// document.write(currTime.setMinutes(5) + "<br>");
		// document.write(currTime.getSeconds(5) + "<br>");
		// document.write(currTime.getMilliseconds(5) + "<br>");


// Note:
		// const currDate = new Date();
		// document.write(currDate.toLocaleDateString() + "<br>");

		// const currTime = new Date();
		// document.write(currTime.toLocaleTimeString()+ "<br>");
		
		// const currDateandTime = new Date();
		// document.write(currDateandTime.toLocaleString())+ "<br>";
		
	
// CLOCK	
	// (function(){
		// setInterval(()=>{
			// let clock = new Date().toLocaleTimeString();
		// document.querySelector('.container').innerHTML=clock;
		// },1000)
	// })();
	