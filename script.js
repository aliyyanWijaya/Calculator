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

const display = document.querySelector(".display");
// get the text inside button exclude clear and equal button
const myButton = document.querySelectorAll("button:not(.clear-button):not(.equalbutton)");

myButton.forEach(button => {
    button.addEventListener("click", () =>{
        const displayNum = button.innerText;
        display.append(displayNum);
        
    })
})

// remove the display when Clear button clicked
const clearButton = document.querySelector(".clear-button");

const removeLastCharacter = (str) => {
    let newString = str.slice(0, -1);
    return newString;
}

clearButton.addEventListener("click", () => {
    let newDisp = removeLastCharacter(display.innerText);
    display.innerText = newDisp;
})