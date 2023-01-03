let canvas = document.querySelector('canvas');
/*																					Creating & Resizing Canvas																		*/
canvas.width = innerWidth;							//innerHeight is the property of Window Object.
canvas.height = innerHeight;						//innerHeight is the property of Window Object.

const ctx = canvas.getContext('2d');
// console.log(ctx);  					//Returning in-built CanvasRenderingContext2d Object consiting tons of Properties & Methods

ctx.fillStyle="red";
ctx.fillRect(100,100,100,100);
