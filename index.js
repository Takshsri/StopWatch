const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
        toggleButtons("start");
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
        toggleButtons("stop");
    }
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    toggleButtons("reset");
}

function update() {
    const currentTime = Date.now();
    elapsedtime = currentTime - starttime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedtime / 1000) % 60);
    let millisecs = Math.floor((elapsedtime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    millisecs = String(millisecs).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${millisecs}`;
}

function toggleButtons(action) {
    const startButton = document.getElementById("myStart");
    const stopButton = document.getElementById("mystop");

    if (action === "start") {
        startButton.disabled = true;
        stopButton.disabled = false;
    } else if (action === "stop") {
        startButton.disabled = false;
        stopButton.disabled = true;
    } else if (action === "reset") {
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}
