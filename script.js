const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");




window.addEventListener("load", () => {
    setInterval(() => {
       const date = new Date();
       const dtHoras = date.getHours();
       const dtMinutos = date.getMinutes();
       const dtSegundos = date.getSeconds();
       setRelogioValue(horas, dtHoras);
       setRelogioValue(minutos, dtMinutos);
       setRelogioValue(segundos, dtSegundos);
    })
})

function setRelogioValue(element, value) {
    if (value < 10) {
        element.textContent = "0" + value;
    }
    else {
        element.textContent = value;
    }
}