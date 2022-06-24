function setRelogioValue(element, value) {
    if (value < 10) {
        element.textContent = "0" + value;
    }
    else {
        element.textContent = value;
    }
}

function createClock() {
    const date = createDate();
    const clockValues = getClockValues();
    setRelogioValue(clockValues[0], date[0]);
    setRelogioValue(clockValues[1], date[1]);
    setRelogioValue(clockValues[2], date[2]);
}

function createDate() {
    const date = new Date();
    const dtHoras = date.getHours();
    const dtMinutos = date.getMinutes();
    const dtSegundos = date.getSeconds();
    return [dtHoras, dtMinutos, dtSegundos];
}


function getClockValues() {
    const hours = document.querySelector("#clock-hours");
    const minutes = document.querySelector("#clock-minutes");
    const seconds = document.querySelector("#clock-seconds");
    return [hours, minutes, seconds];
}


window.addEventListener("load", () => {
    setInterval(createClock);
})