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
    nombre: "yung_lean",
    fuente: "music/agony_-_yung_lean_instrumental_slowed.mp3",
  },
  {
    titulo: "Moonlight_on_the_River",
    nombre: "Mac_Demarco",
    fuente: "music/Moonlight_on_the_River_-_Mac_Demarco_Slowed.mp3",
  },
  {
    titulo: "Gladiator",
    nombre: "Now_We_Are_Free",
    fuente: "music/Now_We_Are_Free_-_Gladiator.mp3",
  },
  {
    titulo: "Dreamscape",
    nombre: "009_Sound_System",
    fuente: "music/Trance_-_009_Sound_System_Dreamscape.mp3",
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
    iconoControl.classList.remove("bi-pause-fill");
    iconoControl.classList.add("bi-play-fill");
  }
}

function reproducirCancion() {
  cancion.play();
  iconoControl.classList.add("bi-pause-fill");
  iconoControl.classList.remove("bi-play-fill");
}

function pausarCancion() {
  cancion.pause();
  iconoControl.classList.remove("bi-pause-fill");
  iconoControl.classList.add("bi-play-fill");
}

actualizarInfoCancion();
