const inptFld = document.querySelector('#field'),
    btn = document.querySelector('#button'),
    msg = document.querySelector('h1');

let math = Math.random(),
    rndmNum = Math.round(math * 100);
    console.log(rndmNum);

const guessNum = () => {
    let userNum = inptFld.value;
    if (inptFld.value) {
        
        if (userNum > rndmNum)
            msg.innerText = "Too High 🤯";
        else if (userNum < rndmNum)
            msg.innerText = "Too Low ☹";
        else
            msg.innerText = "Congrats!🎉You Guessed the right Number";
    } else
        msg.innerText = msg.innerHTML;
};
btn.addEventListener('click', (event) => { 
    guessNum();
} );

inptFld.addEventListener('keyup', (e) => { 
    if (e.key === 'Enter' && inptFld.value)
    guessNum();
});