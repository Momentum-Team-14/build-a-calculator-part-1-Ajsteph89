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
});

clear.addEventListener('click', ()=> {
    display.innerText = '';
});

function truncate (){
    display.innerText = +parseFloat(eval(display.innerText)).toFixed(7);
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
