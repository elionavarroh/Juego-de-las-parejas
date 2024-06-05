//Prueba de concepto: barajar las cartas
const array = [
  {
    id: 1,
    nombre: "Carta 1",
  },
  {
    id: 2,
    nombre: "Carta 2",
  },
  {
    id: 3,
    nombre: "Carta 3",
  },
  {
    id: 4,
    nombre: "Carta 4",
  },
  {
    id: 5,
    nombre: "Carta 5",
  },
  {
    id: 6,
    nombre: "Carta 6",
  },
  {
    id: 7,
    nombre: "Carta 7",
  },
  {
    id: 8,
    nombre: "Carta 8",
  },
  {
    id: 9,
    nombre: "Carta 9",
  },
  {
    id: 10,
    nombre: "Carta 10",
  },
  {
    id: 11,
    nombre: "Carta 11",
  },
  {
    id: 12,
    nombre: "Carta 12",
  },
];

function handleDivCarta(urlImage, imgId) {
  document.getElementById(imgId).src = urlImage;
};

function cambioImagen1() {
  document.getElementById('cambioImagen1').src = "https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/1e5fb246a1654c1b89137e173ccfc20b~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1740077483&x-signature=tnLfrQR5r%2BvLbsJgMYFeZoaeEDw%3D"
};
document.getElementById('cambioImagen1').onclick = cambioImagen1;

function cambioImagen2() {
  document.getElementById('cambioImagen2').src = "https://i.pinimg.com/236x/01/05/f0/0105f0af33c4296aff03661340c236c6.jpg"
};
document.getElementById('cambioImagen2').onclick = function() {
  cambioImagen2();
  resetearPartida();
};

const divImagen1 = document.getElementById("cambioImagen1")
const divImagen2 = document.getElementById("cambioImagen2")

const urlImageOriginal1 = divImagen1.src;
const urlImageOriginal2 = divImagen2.src;

const resetearPartida = () => {
 setTimeout(() => {
  handleDivCarta(urlImageOriginal1, "cambioImagen1");
  handleDivCarta(urlImageOriginal2, "cambioImagen2");
 }, 1000);
};

//Otra forma posible
// if (divCarta1 && divCarta2 instanceof HTMLElement) {
//  const urlImage = "https://imagenes.diariodenavarra.es/files/image_477_265/uploads/2021/02/18/60ae5c9db9f42.jpeg";
//  divCarta2.addEventListener("click", () => {
//    handleDivCarta(urlImage, "cambioImagen1");
//    resetearPartida();
//  });
// }