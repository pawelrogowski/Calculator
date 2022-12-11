function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}
function getSecondNumber(str) {
  const regex = /[+\-*/]/;
  const match = str.match(regex);
  const operator = match[0];

  const arr = str.split(operator);

  return arr[1];
}

const display = document.querySelector(".calculator__display");
const buttons = document.querySelector(".calculator__buttons");

let currentValue = "";
let operator = "";

buttons.addEventListener("click", function (event) {
  const value = event.target.value;

  switch (value) {
    case "clear":
      display.textContent = "";
      break;
    case "+":
      operator = "+";
      currentValue = display.textContent;
      display.textContent = currentValue + " + ";
      break;
    case "-":
      operator = "-";
      currentValue = display.textContent;
      display.textContent = currentValue + " - ";
      break;
    case "*":
      operator = "*";
      currentValue = display.textContent;
      display.textContent = currentValue + " * ";
      break;
    case "/":
      operator = "/";
      currentValue = display.textContent;
      display.textContent = currentValue + " / ";
      break;
    case "=":
      if (operator === "+") {
        display.textContent = add(currentValue, getSecondNumber(display.textContent));
      } else if (operator === "-") {
        display.textContent = subtract(currentValue, getSecondNumber(display.textContent));
      } else if (operator === "*") {
        display.textContent = multiply(currentValue, getSecondNumber(display.textContent));
      } else if (operator === "/") {
        display.textContent = divide(currentValue, getSecondNumber(display.textContent));
      }
      break;
    default:
      display.textContent += value;
      break;
  }
});
