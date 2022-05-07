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
const equal = document.querySelector(".equals");

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(num) {
    currentNum += num;
    currentDisplayNum.textContent = currentNum;
}