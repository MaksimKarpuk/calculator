let min = document.querySelector (".min");
let sec = document.querySelector (".sec");
let start = document.querySelector (".start");
let stop = document.querySelector (".stop");

function startTimer() {
    sec.value--;
    if (sec.value<10) {
        sec.value="0"+sec.value}
    else if (sec.value<0) {
        sec.value=60};
}
function interval (){
    const stopInterval = setInterval(startTimer, 1000)
}
start.addEventListener("click", interval);

function timerStop(){
    clearInterval(stopInterval);
}

stop.addEventListener("click", timerStop);
