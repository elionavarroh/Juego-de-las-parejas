import {
  array,
} from './modelo.js'

//Variables para el estado del juego
let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false; //Significa que el tablero no está bloqueado. En caso de true, lo estaría.

// Función que verifica si las cartas coinciden o no (debes definir esta función)
export const check = () => {
  bloqueo = true; // Bloqueamos el tablero.
  if(primeraCarta.dataset.indiceId !== undefined && segundaCarta.dataset.indiceId !==undefined) {
  if (primeraCarta.dataset.indiceId === segundaCarta.dataset.indiceId) {
    // Si las cartas coinciden, se mantienen volteadas
    primeraCarta.querySelector("img").classList.remove("hide");
    segundaCarta.querySelector("img").classList.remove("hide");
    primeraCarta.classList.add('flipped');
    segundaCarta.classList.add('flipped');
    primeraCarta.dataset.indiceId = undefined;
    segundaCarta.dataset.indiceId = undefined;
    bloqueo = false; // Desbloqueamos el tablero después de comparar
  } else {
    // Si las cartas no coinciden
    setTimeout(() => {
      primeraCarta.querySelector("img").classList.add("hide");
      segundaCarta.querySelector("img").classList.add("hide");
      primeraCarta.classList.remove("flipped");
      segundaCarta.classList.remove("flipped");
      primeraCarta.dataset.indiceId = undefined;
      segundaCarta.dataset.indiceId = undefined;
      bloqueo = false; // Desbloqueamos el tablero después de voltear las cartas
    }, 1000);
  }
};
  console.log(primeraCarta.dataset.indiceId)
  console.log(segundaCarta.dataset.indiceId)
};

//Función 'mapearDivsACartas'. Esta función tiene un 'indiceCarta' y selecciona el div correspondiente usando 'querySelector' con el atribudo 'data-indice-id'
export const mapearDivsACartas = (indiceCarta) => {
  const dataIndiceId = `div[data-indice-id="${indiceCarta}"]`;
  const elemento = document.querySelector(dataIndiceId);
  if (elemento !== null && elemento !== undefined) {
    elemento.addEventListener("click", () => {
       // Previene clics adicionales si el tablero está bloqueado
       if (bloqueo) return;
       // Previene doble clic en la misma carta
       if (elemento === primeraCarta) return;
      // Obtener la URL de la imagen correspondiente al índice
      const imgUrl = array[indiceCarta].imagen;
      // Obtener la imagen dentro del div y cambiar su src
      const imgElement = elemento.querySelector("img");
      if (imgElement !== null) {
        imgElement.src = imgUrl;
        imgElement.classList.remove("hide");
        elemento.classList.add('flipped');
        if (!primeraCarta) {
          //Se asigna la primera carta
          primeraCarta = elemento;
          return;
        }
          //Se asigna la segunda carta
          segundaCarta = elemento;
          //Función que verifica si las cartas coinciden o no
          check();
      }
    });
  }
};