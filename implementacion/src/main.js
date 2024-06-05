import {
  iniciarPartida,
} from './motor.js'

//Este evento asegura que el código dentro de 'iniciarPartida' se ejecute una vez que el documento HTML ha sido completamente cargado y parseado, iniciando así el juego.
document.addEventListener("DOMContentLoaded", () => {
  iniciarPartida();
});