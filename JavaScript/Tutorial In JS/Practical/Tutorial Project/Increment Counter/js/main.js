// forEach Loop:- forEach((currentElement(as Reference), Index, reqiuiredArray)=>{})

//------------------------		Three ways to convert an string into number, So that we can perform arithmetic Operation in it.		-----------------------------
// Using the unary plus operator:
// var n = +str;

// The Number constructor:
// var n = Number(str);

// The parseFloat function:
// var n = parseFloat(str);

const counterNum = document.querySelectorAll('.counter');



counterNum.forEach((print_counter)=>{				//print_counter giving h2 Element of counter class. <h2 class="counter" data-target="4000"></h2>
	print_counter.innerHTML= 0;
	
	const updateCounter = ()=>{
	let targetCounter = +print_counter.getAttribute('data-target');				//Getting value of data-target attribute using getAttribute() method of h2 Element.
	// console.log(typeof(targetCounter));										//DataType of targetCounter is String. So, use '+' sign to convert string into number dataType
	// print_counter.innerHTML= `${targetCounter}`;
	// debugger
	let startingCount = Number(print_counter.innerHTML);
	let countDiff = targetCounter/100;
	
	if(startingCount < targetCounter){
		print_counter.innerHTML = `${startingCount + countDiff}`;
		setTimeout(updateCounter, 10);				
		//Here, function updateCounter increamenting the counter. So setTimeout metho help in calling this function in every 10 millisecond.
	}else{
		
		print_counter.innerHTML= targetCounter;
	}
	}
	
	updateCounter();
})


// Logic:-
// Create a function which increamenting counter by adding startingCount with coutnerDifference inside a loop. And then just continuously Repet this function for 10 msec.