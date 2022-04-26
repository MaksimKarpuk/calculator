let min = document.querySelector(".min");
let seconds = document.querySelector(".sec");
let start = document.querySelector(".start");
let stopTimer = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let field = document.querySelector(".field");
let timerInterval;
const timerReset = () => {
  clearInterval(timerInterval);
  field.innerHTML = "00:00";
  min.value = 0;
  seconds.value = 0;
  start.removeAttribute("disabled");
};
const timerWork = () => {
  if (+seconds.value !== 0) {
    +seconds.value--;
    field.innerHTML = `${+min.value}:${+seconds.value}`;
    if (+seconds.value < 10) {
      field.innerHTML = `${+min.value}:0${+seconds.value}`;
    }
  } else if (+min.value < 10 && +min.value > 0 && +seconds.value === 0) {
    seconds.value = 59;
    +min.value--;
    field.innerHTML = `0${+min.value}:${+seconds.value}`;
  } else if (+seconds.value === 0 && +min.value !== 0) {
    seconds.value = 59;
    +min.value--;
    field.innerHTML = `${+min.value}:${+seconds.value}`;
  } else if (+seconds.value === 0 && +min.value === 0) {
    timerReset();
  }
};
const timerStart = () => {
  if (+seconds.value < 0 || +min.value < 0) {
    alert("Неверное значение!");
    return;
  }
  timerInterval = setInterval(timerWork, 1000);
  start.setAttribute("disabled", "true");
};
const timerStop = () => {
  clearInterval(timerInterval);
  start.removeAttribute("disabled");
};

start.addEventListener("click", timerStart);
stopTimer.addEventListener("click", timerStop);
reset.addEventListener("click", timerReset);
