let canvas = document.getElementById('canvas1');

// ctx stands for Context
// Insted of '2d' we can also pass webgl;
//Returning in-built CanvasRenderingContext2d Object consiting tons of Properties & Methods
const ctx = canvas.getContext('2d');

//FOR INITIAL lOAD:- (Kept at Global Scope)
//Creating & Resizing Canvas
canvas.width = window.innerWidth;						//innerWidth is the property of Window Object.
canvas.height = window.innerHeight;					   //innerHeight is the property of Window Object.

const particlesArray = [];

let hue = 0;

// To avoid stretching of canvas on window resize
//Whenever, window resize, canvas will automatically get adjusted and again draw the required canvas.
addEventListener('resize', () => {

    //FOR RESIZE:-    
    //Creating & Resizing Canvas																	
    canvas.width = window.innerWidth;							//innerWidth is the property of Window Object.
    canvas.height = window.innerHeight;						//innerHeight is the property of Window Object.
})

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    for (let i = 0; i < 10; i++) {
        //Initializing with 100 Particles Object
        particlesArray.push(new Particle())
    }

});

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle())
    }
})

class Particle {
    constructor() {

        //Set the initial x & y to the current mouse Position i.e. Any Number From 0 to Canvas Width & Height
        this.x = mouse.x;
        this.y = mouse.y;

        //Random Number between 1 & 16
        this.size = Math.random() * 15 + 1;

        //Random Value from +1.5 to -1.5
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }

    //Update x & y value based on speedX & speedY
    update() {
        //2D vector
        this.x += this.speedX;
        this.y += this.speedY;

        //Srink Down Effect:- 
        //If any particle size is > 0.2, then decrease its size by 0.1
        if (this.size > 0.2) this.size -= 0.1;
    }

    //Keep drawing based on updated x & Y value
    draw() {
        ctx.fillStyle = this.color;

        //Start Drawing:
        ctx.beginPath();

        //Math.PI*2: It's radian and converted to 360deg 
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        //Fill Color to the arc:
        ctx.fill();

    }
}


function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        //Keep Updating position & drawing each particle
        particlesArray[i].update();
        particlesArray[i].draw();

        
        for (let j = i; j < particlesArray.length; j++) {
            //Pythagorean Theorem Implementation between particles
            const dx = particlesArray[i].x - particlesArray[j].x;
            
            const dy = particlesArray[i].y - particlesArray[j].y;

            //Formula: h^2 = p^2 + b^2;
            //Gives distance between particle 'i' & particle 'j'
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

const animate = () => {
    //Before applying animation rule, Clear all paint from Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue+=2;
    requestAnimationFrame(animate);
}
animate();
