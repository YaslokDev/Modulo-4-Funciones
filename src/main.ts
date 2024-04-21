const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const btnTurnoSiguiente = document.getElementById("turnoSiguiente");
const btnTurnoAnterior = document.getElementById("turnoAnterior");
const btnReset = document.getElementById("reset");
const btnCambiarTurno = document.getElementById("cambiarTurno");
let turno: number = 1;

const sumarTurno = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno++;
    numeroTurno.innerHTML = turno.toString();
  }
};

const restarTurno = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno--;
    numeroTurno.innerHTML = turno.toString();
  }
};

const reset = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno = 1;
    numeroTurno.innerHTML = turno.toString();
  }
};

const cambiarTurno = () => {
  const inputCambiarTurno = document.getElementById("inputCambiarTurno") as HTMLInputElement;
  if (inputCambiarTurno !== null && inputCambiarTurno !== undefined) {
    const nuevoTurno = parseInt(inputCambiarTurno.value);
    if (!isNaN(nuevoTurno)) {
      turno = nuevoTurno;
      numeroTurno.innerHTML = turno.toString();
    }
  }
};

btnTurnoSiguiente?.addEventListener("click", sumarTurno);
btnTurnoAnterior?.addEventListener("click", restarTurno);
btnReset?.addEventListener("click", reset);
btnCambiarTurno?.addEventListener("click", cambiarTurno);
