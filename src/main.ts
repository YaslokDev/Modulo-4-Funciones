const numeroTurno = document.getElementById("numero-turno");
const btnTurnoSiguiente = document.getElementById("turnoSiguiente");
const btnTurnoAnterior = document.getElementById("turnoAnterior");
const btnReset = document.getElementById("reset");
const btnCambiarTurno = document.getElementById("cambiarTurno");
let turno: number = 1;

const sumarTurno = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno++;
    if (turno < 10) {
      numeroTurno.innerHTML = turno.toString().padStart(2, "0");
    } else {
      numeroTurno.innerHTML = turno.toString();
    }
  }
};

const restarTurno = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno--;
    if (turno > 0 && turno < 10) {
      numeroTurno.innerHTML = turno.toString().padStart(2, "0");
    } else {
      numeroTurno.innerHTML = turno.toString();
    }
  }
};

const reset = () => {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    turno = 1;
    numeroTurno.innerHTML = turno.toString().padStart(2, "0");
  }
};

const cambiarTurno = () => {
  const inputCambiarTurno = document.getElementById("inputCambiarTurno");
  if (inputCambiarTurno !== null && inputCambiarTurno !== undefined && inputCambiarTurno instanceof HTMLInputElement) {
    const nuevoTurno = parseInt(inputCambiarTurno.value);
    if (!isNaN(nuevoTurno) && numeroTurno !== null && numeroTurno !== undefined && numeroTurno instanceof HTMLElement) {
      turno = nuevoTurno;
      if (turno > 0 && turno < 10) {
        numeroTurno.innerHTML = turno.toString().padStart(2, "0");
      } else {
        numeroTurno.innerHTML = turno.toString();
      }
    }
  }
};

btnTurnoSiguiente?.addEventListener("click", sumarTurno);
btnTurnoAnterior?.addEventListener("click", restarTurno);
btnReset?.addEventListener("click", reset);
btnCambiarTurno?.addEventListener("click", cambiarTurno);
