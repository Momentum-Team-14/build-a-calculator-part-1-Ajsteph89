let numbers = document.querySelectorAll('.numButton')
let display = document.querySelector('.display')
let operators = document.querySelectorAll('.mathSymb')
let answer = document.getElementById('calculate')

for (let number of numbers){
    number.addEventListener('click', ()=> {
        display.innerText += number.innerText;
    });
}
for (let operator of operators){
    operator.addEventListener('click', ()=> {
        display.innerText += operator.innerText;
    });
}
answer.addEventListener('click', ()=> {
    display.innerText = eval(display.innerText);
});


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
