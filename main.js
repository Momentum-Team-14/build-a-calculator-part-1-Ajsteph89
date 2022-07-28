let numbers = document.querySelectorAll('.numButton')
let display = document.querySelector('.display')
let operators = document.querySelectorAll('.mathSymb')
let answer = document.getElementById('calculate')
let clear = document.getElementById('clearButton')


for (let number of numbers){
    number.addEventListener('click', ()=> {
        display.innerText += number.innerText;
        charLimit();
    });
}
for (let operator of operators){
    operator.addEventListener('click', ()=> {
        display.innerText += operator.innerText;
    });
}
answer.addEventListener('click', ()=> {
    display.innerText = eval(display.innerText);
    truncate();
    lols();
    sweet();
    unluncky();
    evil();
    makeAWish();
});

clear.addEventListener('click', ()=> {
    display.innerText = '';
});

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
        display.innerText = "420 Sweet";
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

// function calculate (operator, num1, num2){
//     if (operator === "+"){
//         let total = num1 + num2;
//         return total;
//     }
//     else if (operator === "-"){
//         let total = num1 - num2;
//         return total;
//     }
//     else if (operator === "/"){
//         let total = num1 / num2;
//         return total;
//     }
//     else if (operator === "x"){
//         let total = num1 * num2;
//         return total;
//     }
// }
