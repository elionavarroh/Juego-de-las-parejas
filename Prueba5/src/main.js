const array = [
  {
    idfoto: 0,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idfoto: 1,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idfoto: 2,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idfoto: 3,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idfoto: 4,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idfoto: 5,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idfoto: 6,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idfoto: 7,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idfoto: 8,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idfoto: 9,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idfoto: 10,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
  {
    idfoto: 11,
    imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];

//Función iniciar partida que llama a generar tablero
const iniciarPartida = () => {
  generarTablero()
};

const mapearDivsACartas = (indiceCarta) => {
  const dataIndiceId = `div[data-indice-id="${indiceCarta}"]`;
  const elemento = document.querySelector(dataIndiceId);
  if (elemento !== null && elemento !== undefined) {
    elemento.addEventListener("click",() => { 
    // Obtener la URL de la imagen correspondiente al índice
    const imgUrl = array[indiceCarta].imagen;
    // Obtener la imagen dentro del div y cambiar su src
    const imgElement = elemento.querySelector("img");
    if (imgElement !== null) {
      imgElement.src = imgUrl;
    }
  });
}
};

const generarTablero = () => {
  for (let i = 0 ; i < array.length; i++) {
    mapearDivsACartas(i)
  };
}

document.addEventListener("DOMContentLoaded", iniciarPartida);