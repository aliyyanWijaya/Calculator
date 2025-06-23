//create basic function

// 1 Add
const addNum = (number1, number2) => number1 + number2;

// 2 Substract
const subtractNum = (number1, number2) => number1 - number2;

// 3 Multiply
const multiplyNum = (number1, number2) => number1 * number2;

// 4 Divide
const divideNum = (number1, number2) => number1 / number2;

let num1 = 0;
let operator = "";
let num2 = 0;

const operate = (num1, operator, num2) => {
    if (operator == "+") {
        return addNum(num1, num2);
    } else if (operator == "-") {
        return subtractNum(num1, num2);
    } else if (operator == "x") {
        return multiplyNum(num1, num2);
    } else if (operator == "/") {
        return divideNum(num1, num2);
    }
}

const display = document.querySelector(".display");
// get the text inside button exclude clear and equal button
const myButton = document.querySelectorAll("button:not(.clear-button):not(.equal-button):not(.clear-display-button)");
const displayResult = document.querySelector(".display-result");
const dotButton = document.querySelector(".dot-button");

myButton.forEach(button => {
    button.addEventListener("click", () =>{
        if (displayResult.innerText) {
            displayResult.innerText = "";
            display.innerText = "";
        }
        
        const displayNum = button.innerText;
        display.append(displayNum);
    })
})

dotButton.addEventListener("click", (e)=> {
    let displayText = display.innerText;
    if (displayText.includes(".")) {
        dotButton.disabled = true;
    } else {
        dotButton.disabled = false;
    }
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
});

// evaluate when user click =
const evalButton = document.querySelector(".equal-button");
const mathOperatorsRegex = /(\+|-|\*|\/|x)/;  // Capturing group for operators


evalButton.addEventListener("click", () => {
    const getDisplay = display.innerText;
    let splitDisplay = getDisplay.split(mathOperatorsRegex);
    numInp1 = Number(splitDisplay[0]);
    operInp = splitDisplay[1];
    numInp2 = Number(splitDisplay[2]);
    displayResult.innerText = operate(numInp1, operInp, numInp2);
})

const deleteDisplayButton = document.querySelector(".clear-display-button");
deleteDisplayButton.addEventListener("click", () => {
    displayResult.innerText = "";
    display.innerText = "";
})