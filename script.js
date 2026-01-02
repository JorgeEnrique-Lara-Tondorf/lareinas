/* =========================
   🎵 MÚSICA ALEATORIA
========================= */

const canciones = [
    "./music/extracted-audio.mp3",
];

let musicaSonando = false;

function reproducirAleatoria() {
    if (musicaSonando) return;

    const audio = document.getElementById("musica");
    const cancion = canciones[Math.floor(Math.random() * canciones.length)];

    audio.src = cancion;
    audio.volume = 0.7;
    audio.play();

    const boton = document.querySelector(".music-btn");
    if (boton) {
        boton.innerText = "🎶 Sonando para nosotros";
    }

    musicaSonando = true;
}

/* =========================
   💖 CORAZONES + FOTOS CAYENDO
========================= */

const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
];

function crearElemento() {
    const e = document.createElement("div");
    e.classList.add("caida");

    if (Math.random() > 0.5) {
        e.innerText = "💖";
        e.classList.add("corazon");
    } else {
        const img = document.createElement("img");
        img.src = fotos[Math.floor(Math.random() * fotos.length)];
        e.appendChild(img);
        e.classList.add("foto");
    }

    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = Math.random() * 3 + 5 + "s";

    document.body.appendChild(e);

    setTimeout(() => e.remove(), 8000);
}

setInterval(crearElemento, 700);
