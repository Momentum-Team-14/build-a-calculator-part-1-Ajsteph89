let numbers = document.querySelectorAll('.numButton')
let display = document.querySelector('.display')
let operators = document.querySelectorAll('.mathSymb')
let answer = document.getElementById('calculate')
let clear = document.getElementById('clearButton')

//listen for clicks to add numbers to display
for (let number of numbers){
    number.addEventListener('click', ()=> {
        display.innerText += number.innerText;
        charLimit();
    });
}
//listen for clicks to add operators to display
for (let operator of operators){
    operator.addEventListener('click', ()=> {
        display.innerText += operator.innerText;
    });
}
//equals sign calculates answer based on displayed text
answer.addEventListener('click', ()=> {
    display.innerText = eval(display.innerText);
    truncate();
    lols();
    sweet();
    unluncky();
    evil();
    makeAWish();
});

//clear button resets display to null
clear.addEventListener('click', ()=> {
    display.innerText = '';
});
//Easter eggs
function truncate (){
    display.innerText = +parseFloat(eval(display.innerText)).toFixed(7);
}

function lols (){
    if (display.innerText === '69'){
        display.innerText = "69 Nice";
    }
}

function sweet (){
    if (display.innerText === '420'){
        display.innerText = "420 U Cool?";
    }
}

function unluncky(){
    if (display.innerText === '13'){
        display.innerText = "13 lucky u";
    }
}

function evil(){
    if(display.innerText === '666'){
        display.innerText = "666 EEEVIL"
    }
}

function makeAWish(){
    if(display.innerText === '1111'){
        display.innerText = "1111 Wish"
    }
}
