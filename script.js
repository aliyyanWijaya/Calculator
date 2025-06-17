//create basic function

// 1 Add
const addNum = (num1, num2) => num1 + num2;

// 2 Substract
const subtractNum = (num1, num2) => num1 - num2;

// 3 Multiply
const multiplyNum = (num1, num2) => num1 * num2;

// 4 Divide
const divideNum = (num1, num2) => num1 / num2;

let num1 = 0;
let operator = "";
let num2 = 0;

const operate = (num1, operator, num2) => {
    switch(operator) {
        case "+":
            addNum(num1, num2);
            break;
        case "-":
            subtractNum(num1, num2);
            break;
        case "x":
            multiplyNum(num1, num2);
            break;
        case "/":
            divideNum(num1, num2);
            break;
        default:
            return "error"
    }
}

// get the text inside button
const myButton = document.querySelectorAll("button");

myButton.forEach(button => {
    button.addEventListener("click", () =>{
        console.log(button.innerText);
    })
})