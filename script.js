let currentNum = "";
let prevNum = "";
let operator = "";

const currentDisplayNum = document.querySelector(".currentNumber");
const prevDisplayNum = document.querySelector(".previousNumber");

window.addEventListener("keydown", handleKeyBoard)

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalc);

function clearCalc() {
    currentNum = "";
    prevNum = "";
    currentDisplayNum.textContent = "0";
    prevDisplayNum.textContent = "";
}


const plusMinus = document.querySelector(".plus-minus");
plusMinus.addEventListener("click", posNeg)

function posNeg() {
    currentNum = -1 * currentNum
    currentDisplayNum.textContent = currentNum
}

const percentage = document.querySelector(".percent");
percentage.addEventListener("click", percent);

function percent() {
    let tempNum = currentNum / 100; 
    currentDisplayNum.textContent = tempNum;
}
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addDecimal)

function addDecimal() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currentDisplayNum.textContent = currentNum;
    }
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(currentNum!= "" && prevNum != "") {
        calc();
    }
});

function calc() {
    prevNum = Number(prevNum);
    currentNum = Number(currentNum);

    if(operator === "+") {
        prevNum += currentNum
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
    if(prevNum.length <= 10) {
        currentDisplayNum.textContent = prevNum;
    } else {
        currentDisplayNum.textContent = prevNum.slice(0, 11) + "...";
    }
    prevDisplayNum.textContent = "";
    operator = "";
    currentNum = "";
}

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(num) {
    if(prevNum !== "" && currentNum !== "" && operator === "") {
        prevNum = "";
        currentDisplayNum.textContent = currentNum;
    }
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
    if(prevNum === "") {
        prevNum = currentNum;
        operatorCheck(op);
    } else if(currentNum === "") {
        operatorCheck(op);
    } else {
        calc();
        operator = op;
        currentDisplayNum.textContent = "0";
        prevDisplayNum.textContent = prevNum + " " + operator;
    }
}

function operatorCheck(text) {
    operator = text
    prevDisplayNum.textContent = (prevNum + " " + operator);
    currentDisplayNum.textContent = "0";
    currentNum ="";
}
}

function handleKeyBoard(e) {
    e.preventDefault();
    if(e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }
    if(e.key === "Enter" ||
    e.key === "=" && currentNum != "" && prevNum != "") {
        calc();
    }
    if(e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key);
    }
    if(e.key === "*") {
        handleOperator("X");
    }
    if(e.key === ".") {
        addDecimal();
    }
    if(e.key === "Backspace") {
        handleDelete();
    }
}

function handleDelete() {
    if(currentNum != "") {
        currentNum = currentNum.slice(0, -1);
        currentDisplayNum.textContent = currentNum;
    }
}