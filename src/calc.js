let calcField = document.querySelector(".calculator__fieldArea");
let calcBtn = document.querySelector(".calculator__btn");
let buttonArray = document.querySelectorAll(".button");
let buttonPlus = document.querySelector(".calculator__btnPlus");
let buttonMinus = document.querySelector(".calculator__btnMinus");
let buttonMultiply = document.querySelector(".calculator__btnMultiply");
let buttonDevide = document.querySelector(".calculator__btnDevide");
let buttonDelete = document.querySelector(".calculator__btnDelite");
let buttonEqually = document.querySelector(".calculator__btnEqually");
let buttonPoint = document.querySelector(".calculator__btnPoint");
let calculatorNull = document.querySelector(".calculator__btnNull");
let num = "";
let functionOut = (event) => {
  let ev = event.target.value;
  if (num === "") {
    if (ev === "*" || ev === "/" || ev === "+") {
      return;
    }
  }
  if (ev === "." && num === "") {
    num = 0;
  }

  num += ev;
  for (let i = 0; i < num.length; i++) {
    if (
      num[i] !== "*" ||
      num[i] !== "/" ||
      num[i] !== "+" ||
      num[i] !== "-" ||
      num[i] !== "."
    ) {
      num[i] = Number(num[i]);
    }
  }
  for (let i = 0; i < num.length; i++) {
    if (ev === "." && num[i] !== "") {
      num[i] !== ".";
    }
  }
  calcField.value = num;
};
calcBtn.addEventListener("click", functionOut);

let functionDelete = () => {
  num = "";
  calcField.value = num;
};
buttonDelete.addEventListener("clicl", functionDelete);

let functionEqual = () => {
  num = eval(num);
  calcField.value = num;
};
buttonEqually.addEventListener("clicl", functionEqual);
