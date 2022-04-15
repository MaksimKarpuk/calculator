let minutes = 0;
let seconds = 0;
let min = document.querySelector (".min");
let sec = document.querySelector (".sec");
let start = document.querySelector (".timerStart");
let stop = document.querySelector (".timerStop");
let secField = document.querySelector(".secField");
let minField = document.querySelector(".minField");

function Start() {
    secField.innerHTML=sec.value;
    sec.value++;
    if (sec.value<10)
    {secField.innerHTML="0"+sec.value}
    else
    // else if (seconds>60)
    // {minField.innerHTML=min.value, minutes++;  }
    {secField.innerHTML=sec.value};
}
start.addEventListener("click", setInterval(Start, 1000));


