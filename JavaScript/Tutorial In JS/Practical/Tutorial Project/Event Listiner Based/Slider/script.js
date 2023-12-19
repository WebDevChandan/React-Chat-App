const nxtBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let slider = document.querySelector('#slider');
let images = [
    "http://www.sololearn.com/uploads/slider/1.jpg",
    "http://www.sololearn.com/uploads/slider/2.jpg",
    "http://www.sololearn.com/uploads/slider/3.jpg",
]


let num = 0;
const next = () => {
    num++;
    
    if (num >images.length-1) {
        
        num  = 0;
    }
    
    slider.src = images[num];
        
}
const prev = () => {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
nxtBtn.addEventListener('click', () => next());
prevBtn.addEventListener('click', () => prev() );