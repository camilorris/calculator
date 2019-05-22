const buttons = document.querySelector(".calc-buttons");
const screen = document.querySelector(".screen");
let combinedOperation = "";

function clearScreenAndOperation() {
  screen.innerText = "0";
  combinedOperation = "";
}

function clearScreen() {
  screen.innerText = "0";
}

function addNumbersToScreen(number) {
  if (screen.innerText === "0") {
    screen.innerText = number;
    return;
  }
  screen.innerText += number;
}

function deleteOneNumber() {
  if (screen.innerText.length === 1) {
    screen.innerText = "0";
    return;
  }
  screen.innerText = screen.innerText.slice(0, -1);
}

function addOperatortoCombinedOperation(operator) {
  if (screen.innerText !== "0") {
    combinedOperation += screen.innerText + operator;
    clearScreen();
  }
}

function printOperationSolution() {
  if (screen.innerText !== "0") {
    screen.innerText = eval(combinedOperation + screen.innerText);
  }
}

buttons.addEventListener("click", function(event) {
  const clickedButtonValue = event.target.innerText;

  switch (clickedButtonValue) {
    case "C":
      clearScreenAndOperation();
      break;

    case "←":
      deleteOneNumber();
      break;

    case "÷":
      addOperatortoCombinedOperation("/");
      break;
    case "×":
      addOperatortoCombinedOperation("*");
      break;
    case "+":
    case "-":
      addOperatortoCombinedOperation(clickedButtonValue);
      break;
    case "=":
      printOperationSolution();
      break;
    default:
      addNumbersToScreen(clickedButtonValue);
  }

  event.stopPropagation();
});
