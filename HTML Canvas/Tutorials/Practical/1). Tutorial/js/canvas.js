let canvas = document.querySelector('canvas');
/*																					Creating & Resizing Canvas																		*/
canvas.width = innerWidth;							//innerHeight is the property of Window Object.
canvas.height = innerHeight;						//innerHeight is the property of Window Object.



/*																					Drawing Elements																				*/
//Getting the reference of 2D canvas context, where we'll be returning a drawing context in variable 'c'.
let c = canvas.getContext('2d');						// Basically we're creating an Object, passing tons of methods and function which we can use to actulaly draw within our canvas
	
	//DRAW A RECTANGLE
	c.fillStyle="rgba(255,0,0,0.1)";								//Using CSS Styling to the style rectangle with the help fillStyle property
	c.fillRect(100, 100, 100, 100); 
	
	c.fillStyle="rgba(0,255,0,0.1)";
	c.fillRect(400, 300, 100, 100); 
	
	c.fillStyle="rgba(0,0,255,0.1)";	
	c.fillRect(400, 100, 100, 100); 
	
	c.fillStyle="#13f4ff";	
	c.fillRect(100, 300, 100, 100);  

/*																					Drawing on the Canvas 																			*/

	//DRAW A LINE
c.beginPath();														//This basically indicate a point for canvas saying, Okay we want to start a path. 

c.moveTo(50,300)													//Now we're declaring where on the canvas we want our path to start by passing X & Y co-ordinate for positioning
// Note: This would be a point, so it will be invisible until we call a stroke() method. As soon as we call method then we'll start to see a line from a point to point

c.lineTo(300,100);															//Created line to another new point. 
//This method would going to create another new point.
c.lineTo(300,200);
c.lineTo(400,300);
c.lineTo(200,300);

c.strokeStyle = "red";													//Using CSS Styling the style stroke line with the help strokeStyle property

c.stroke();
//To display line or say to build connection between points.


	//DRAW AN ARC / Circle
c.beginPath();													
//We want to make sure that we're preceding any arc or any line with this beginPath() method because it's going to seprate the two and prevent them from connecting to each other. 
c.arc(300,400,30,0,Math.PI*2,false);
c.strokeStyle = 'blue';
c.stroke();
