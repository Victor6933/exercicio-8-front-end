let segundos = 0;
let intervalo = null;
let numeroVolta = 1;

function formatarTempo() {
  let horas = Math.floor(segundos / 3600);
  let minutos = Math.floor((segundos % 3600) / 60);
  let secs = segundos % 60;

  horas = String(horas).padStart(2, "0");
  minutos = String(minutos).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  return horas + ":" + minutos + ":" + secs;
}

function atualizarDisplay() {
  document.getElementById("display").textContent =
    formatarTempo();
}

function iniciar() {
  if (intervalo === null) {
    intervalo = setInterval(function() {
      segundos++;
      atualizarDisplay();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetar() {
  pausar();
  segundos = 0;
  numeroVolta = 1;
  atualizarDisplay();
  document.getElementById("voltas").innerHTML = "";
}

function marcarVolta() {
  if (segundos > 0) {
    let item = document.createElement("li");
    item.textContent =
      "Volta " + numeroVolta + ": " + formatarTempo();

    document.getElementById("voltas").appendChild(item);
    numeroVolta++;
  }
}

atualizarDisplay();