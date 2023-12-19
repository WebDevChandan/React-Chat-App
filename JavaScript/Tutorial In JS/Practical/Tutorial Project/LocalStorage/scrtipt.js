const body = document.querySelector('body'),
    btn = body.querySelector('button');
 
let getClick = true;

const darkMode = () => {
        let getDark = localStorage.getItem('theme');
		if(getDark	=== null){
			console.log('hi');
			body.setAttribute('class', '');
		}
		else if (getClick) {

        body.classList.add(`${getDark}`);
        getClick = false;
        // console.log(getDark);
		
		} else {
        localStorage.removeItem('theme');
        body.classList.remove('dark');
        getClick = true;
        
    }  
};
darkMode();
btn.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
    darkMode();
});