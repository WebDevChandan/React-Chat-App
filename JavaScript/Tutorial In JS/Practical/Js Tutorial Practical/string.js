	// STRINGS IN JAVASCRIPT
	
	// let myName = 'Chandan Kumar is a Web Developer';
	// document.write(myName.search('Kumar'));
	
	// EXTRACTING STRING PARTS
	// SLICE() METHOD
	// let str = "Apple, Banana, Kiwi";
	// document.write(str.slice(7,-2));
	
	// substring() METHOD
	// let str = "Apple, Banana, Kiwi";
	// document.write(str.substr(-5));
	
	
	// *Display only 280 characters of a string like the one used in Twitter?
	// let tweet = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  reprehenderit  voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt  culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor  reprehenderit  voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum";
	
	// let myTweet = tweet.slice(0, 280);
	// document.write(myTweet);
	
	// REPLACE METHOD
	// let myBio = "My Name is Chandan Kumar Chandan";
	// let new_data = myBio.replaceAll('Chandan', 'King');
	// document.write(new_data);
	
	// charCodeAt METHOD //Find UNICode last character in a string
	// let myBio = "My Name is Chandan Kumar Chandan";
	// document.write(myBio.charCodeAt(myBio.length-1));
	
	// PROPERTY ACCESS []
	// let myBio = "My Name is Chandan Kumar Chandan";
	// document.write(myBio[11]);
	
	// Other Useful Methods of String
		// let myBio = "My Name is Chandan Kumar";
		// document.write(myBio.toLowerCase());
	
	// Concat Method
		// let fName = "Chandan";
		// let lName = "Kumar";
		// document.write(fName.concat(" ",lName));
	// document.write(fName.concat(' ', lName));
	
		// trim METHOD
		// let str = "                                  Hello   World                               ";
		// console.log(str.trim());
		
		// CONVERT STRING INTO Array
		// var txt = "a, b, |, d, e";
		// console.log(txt.split(","));
		// console.log(txt.split(" "));
		// console.log(txt.split("|"));
		// console.log(txt.split("$"));
	
	
		// CALLBACK Function
		// const per1 = (friend, callBackfn) =>{
			// document.write(`Hey, What's Up ${friend}? <br>`);
			// callBackfn();
		// }
		
		// const per2 = ()=>{
			// document.write(`Wait, I call you Back!`);
		// }
		
		// per1(`Chandan`, per2);			//Passing `Chandan`, per2 as Argument		