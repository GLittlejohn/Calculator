let currentNum = "";
let prevNum = "";
let operator = "";

const currentDisplayNum = document.querySelector(".currentNumber");
const prevDisplayNum = document.querySelector(".previousNumber");

const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percent");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
equal.addEventListener("click", calc);

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(num) {
    currentNum += num;
    currentDisplayNum.textContent = currentNum;
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    })
});

function handleOperator(op) {
    operator = op;
    prevNum = currentNum;
    prevDisplayNum.textContent = prevNum + " " + operator;
    currentNum ="";
    currentDisplayNum.textContent = "";
}

function calc() {
    prevNum = Number(prevNum);
    currentNum = Number(currentNum);

    if(operator === "+") {
        prevNum = prevNum + currentNum;
    } else if(operator === "-") {
        prevNum = prevNum - currentNum;
    } else if(operator === "X") {
        prevNum = prevNum * currentNum;
    } else if(operator === "÷") {
        prevNum = prevNum / currentNum;
    }
    prevDisplayNum.textContent = "";
    currentDisplayNum.textContent = prevNum;
}