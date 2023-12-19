
//											--------------------		selectedIndex Property		--------------------		
// The selectedIndex property sets or returns the index of the selected option in a drop-down list.
// The Index starts at 0.
// Note: If the drop-down list allows multiple selections it will only return the index of hte first option slected.
// Note: The value "-1" will deselect all options (if any).
// NOte: If no option is selected, the selectedIndex property will return -1.



// Function for converting Temp, From Celsius to Fahrenheit
const celFar = (getEnterTemp)=>{
	let celFarData = Math.round(((getEnterTemp * 9/5) + 32));
	return celFarData;										
	//Using return keyword, we are returning data stored in celFarData back to celFar(enterTemp) and stored it in result.
};

// Function for converting Temp, From Fahrenheit to Celsius 
const farCel = (getEnterTemp)=>{
	let farCelData = Math.round(((getEnterTemp -32) * 5/9));
	return farCelData;
}; 


const clickSub = ()=>{	

const enterTemp = document.querySelector('.temp').value;
//Note: this statement shouldn't be in Global Scope Because here we're getting value by firing onsubmit event of the form instead of onclick. So, clickSub fun calling by onsubmit event firing by Submit button laying insider the form & input value for entering Temp is also laying inside the same form.



		let select_Temp = document.getElementById('tempSelect');
		let getIndex = select_Temp.selectedIndex;
		
		if(getIndex == 0){
			let result = celFar(enterTemp);															//Data stored back to 'result' using 'return celFarData'
			document.querySelector('.result').innerHTML=`${result}<sup>o</sup> Fahrenheit`;
		}
		else{
			let result = farCel(enterTemp);
			document.querySelector('.result').innerHTML=`${result}<sup>o</sup> Celsius `;
		}
}