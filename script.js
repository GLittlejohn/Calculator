let currentNum = "";
let prevNum = "";
let operator = "";

const currentDisplayNum = document.querySelector(".currentNumber");
const prevDisplayNum = document.querySelector(".previousNumber");

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalc);

const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percent");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(currentNum!= "" && prevNum != "") {
        calc();
    }
});

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(num) {
    if(currentNum.length <= 10) {
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
        prevNum += currentNum;
    } else if(operator === "-") {
        prevNum -= currentNum;
    } else if(operator === "X") {
        prevNum *= currentNum;
    } else if(operator === "÷") {
        if(currentNum <= 0) {
            prevNum = "Error";
            results();
            return;
        }
        prevNum /= currentNum;
    }
    prevNum = prevNum.toString();
    results();
}

function results() {
    prevDisplayNum.textContent = "";
    operator = "";
    if(prevNum.length <= 10) {
        currentDisplayNum.textContent = prevNum;
    } else {
        currentDisplayNum.textContent = prevNum.slice(0, 11) + "...";
    }
}

function clearCalc() {
    currentNum = "";
    prevNum = "";
    currentDisplayNum = "0";
    prevDisplayNum = "";
}