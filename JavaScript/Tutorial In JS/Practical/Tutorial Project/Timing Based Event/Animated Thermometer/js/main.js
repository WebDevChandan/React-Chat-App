// Font-awesome cheat sheet, to get the unicode of Icons



const tempLoad = ()=>{
	let temp = document.getElementById('temp');
	temp.innerHTML= "&#xf2cb";
	temp.style.color="#f5f904";
	// Note: There should be unicode of icons of font-awesome's version 4.7.0. Link: https://fontawesome.com/v4.7/cheatsheet/
	

		
	setTimeout(()=>{
				temp.innerHTML= "&#xf2ca";
				temp.style.color="#f99704";
			
	},1000);
	
	setTimeout(()=>{
				temp.innerHTML= "&#xf2c9;";
				temp.style.color="#f98004";
		
				},2000);
	
	setTimeout(()=>{
				temp.innerHTML= "&#xf2c8";
				temp.style.color="#f95e04";
				},3000);
				
	setTimeout(()=>{
				temp.innerHTML= "&#xf2c7";
				temp.style.color="#f90404";		
				},4000);

	
}

tempLoad();

	
	setInterval(tempLoad,5000);			//Now, setInterval() method, going to start recalling this function 'tempLoad' continuously after 5 seconds.