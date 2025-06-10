const tituloCancion = document.querySelector(".reproductor_Musica h1");
const nombreArtista = document.querySelector(".reproductor_Musica p");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControl");
const botonReproducirPausar = document.getElementById(
  ".controle button . boton-reproducir-pausar"
);

const botonAtras = document.getElementById(".controles button.atras");
const botonAdelante = document.getElementById(".controles button.adelante");

const canciones = [
  {
    titulo: "agony",
    nombre: "DG",
    fuente: "SSS",
  },
];
let indiceCancionActual = 0;

function actualizarInfoCancion() {
  tituloCancion.textContent = canciones[indiceCancionActual].titulo;
  nombreArtista.textContent = canciones[indiceCancionActual].nombre;
  cancion.src = canciones[indiceCancionActual].fuente;
  cancion.addEventListener("loadeddata", function () {});
}
botonReproducirPausar.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
  } else {
    pausarCancion();
  }
}

function reproducirCancion() {
  cancion.play();
}

function pausarCancion() {
  cancion.pause();
}

actualizarInfoCancion();
