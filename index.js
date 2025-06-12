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
    fuente: "music /agony remixFINAL MIX222.wav",
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
    iconoControl.classList.add("bi-pause-fill");
    iconoControl.classList.remove("bi-play-fill");
  } else {
    pausarCancion();
    iconoControl.classList.remove("bi-pause-fill");
    iconoControl.classList.add("bi-play-fill");
  }
}

function reproducirCancion() {
  cancion.play();
}

function pausarCancion() {
  cancion.pause();
}

actualizarInfoCancion();
