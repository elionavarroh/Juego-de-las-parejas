import {
  array,
} from './modelo.js'

import {
  mapearDivsACartas,
  check,
} from './ui.js'

//Función 'shuffleArray'. Esta función sirve para mezclar aleatoriamentes los elementos del array.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  };
};

//Función 'iniciarPartida'. Esta es una función para iniciar el juego y, a su vez, llama a 'generarTablero'
export const iniciarPartida = () => {
  shuffleArray(array)
  generarTablero()
};

//Función 'generarTablero'. Recorre el array y llama a 'mapearDivsACartas' para cada índice, mapeando cada carta (div) a su evento correspondiente.
const generarTablero = () => {
  for (let i = 0; i < array.length; i++) {
    mapearDivsACartas(i)
  };
};


