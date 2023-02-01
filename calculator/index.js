let resultPrev = document.getElementById("results__prev");
let resultFinal = document.getElementById("results__next");

let mathSymbol = "";
let prevValue = "";

//! mechanical option or manual -> BAD
//? Math numbers
// const buttonSeven = document.getElementById("seven");
// const buttonEight = document.getElementById("eight");
// const buttonNine = document.getElementById("nine");
// const buttonFour = document.getElementById("four");
// const buttonFive = document.getElementById("five");
// const buttonSix = document.getElementById("six");
// const buttonOne = document.getElementById("one");
// const buttonTwo = document.getElementById("two");
// const buttonThree = document.getElementById("three");
// const buttonZero = document.getElementById("zero");

// //? Math operators
// const buttonMinus = document.getElementById("minus");
// const buttonDivisor = document.getElementById("divisor");
// const buttonMultiply = document.getElementById("multiply");
// const buttonPlus = document.getElementById("plus");

// const buttonPoint = document.getElementById("point");
// const buttonReset = document.getElementById("reset");
// const buttonDEL = document.getElementById("DEL");
// const buttonEqual = document.getElementById("equal");

// const addNumberResult = (e) => {
//   resultFinal.textContent += e.target.textContent;
// };

// buttonSeven.addEventListener("click", addNumberResult);
// buttonEight.addEventListener("click", addNumberResult);
// buttonNine.addEventListener("click", addNumberResult);
// buttonFour.addEventListener("click", addNumberResult);
// buttonFive.addEventListener("click", addNumberResult);
// buttonSix.addEventListener("click", addNumberResult);
// buttonOne.addEventListener("click", addNumberResult);
// buttonTwo.addEventListener("click", addNumberResult);
// buttonThree.addEventListener("click", addNumberResult);
// buttonZero.addEventListener("click", addNumberResult);

// const addMathOperator = (e) => {
//   let buttonValue = e.target.textContent;
//   buttonValue = buttonValue === "x" ? "*" : buttonValue;

//   resultPrev.textContent = `${buttonValue} ${resultFinal.textContent}`;
//   mathSymbol = buttonValue;
//   prevValue = resultFinal.textContent;
//   resultFinal.textContent = "";
// };

// buttonMinus.addEventListener("click", addMathOperator);
// buttonDivisor.addEventListener("click", addMathOperator);
// buttonMultiply.addEventListener("click", addMathOperator);
// buttonPlus.addEventListener("click", addMathOperator);

// buttonPoint.addEventListener("click", (e) => {
//   const buttonValue = e.target.textContent;
//   if (resultFinal.textContent.includes(buttonValue)) {
//     return;
//   }
//   resultFinal.textContent += buttonValue;
// });
// buttonReset.addEventListener("click", () => {
//   resultPrev.textContent = "";
//   resultFinal.textContent = "";
// });
// buttonDEL.addEventListener("click", () => {
//   const positionToDelete = resultFinal.textContent.length - 1;
//   resultFinal.textContent = resultFinal.textContent.slice(0, positionToDelete);
// });
// buttonEqual.addEventListener("click", () => {
//   if (resultFinal.textContent === "" || resultPrev.textContent === "") {
//     return;
//   }
//   const result = `${prevValue} ${mathSymbol} ${resultFinal.textContent}`;

//   resultFinal.textContent = eval(result);
//   resultPrev.textContent = "";
// });

//* Dynamic option and better

const buttons = document.getElementsByClassName("buttons__item");

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.textContent;

    if (!isNaN(buttonValue)) {
      addNumberResult(buttonValue);
    } else if (buttonValue === ".") {
      addPointResult(buttonValue);
    } else {
      determinateButton(buttonValue);
    }
  });
}

const addNumberResult = (buttonValue) => {
  resultFinal.textContent += buttonValue;
};

const determinateButton = (buttonValue) => {
  if (buttonValue === "DEL") {
    const positionToDelete = resultFinal.textContent.length - 1;
    resultFinal.textContent = resultFinal.textContent.slice(
      0,
      positionToDelete
    );
  } else if (buttonValue === "RESET") {
    resultPrev.textContent = "";
    resultFinal.textContent = "";
  } else if (buttonValue === "=") {
    if (resultFinal.textContent === "" || resultPrev.textContent === "") {
      return;
    }
    const result = `${prevValue} ${mathSymbol} ${resultFinal.textContent}`;

    resultFinal.textContent = eval(result);
    resultPrev.textContent = "";
  } else {
    buttonValue = buttonValue === "x" ? "*" : buttonValue;

    resultPrev.textContent = `${buttonValue} ${resultFinal.textContent}`;
    mathSymbol = buttonValue;
    prevValue = resultFinal.textContent;
    resultFinal.textContent = "";
  }
};

const addPointResult = (buttonValue) => {
  if (resultFinal.textContent.includes(buttonValue)) {
    return;
  }

  resultFinal.textContent += buttonValue;
};
