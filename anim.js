// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
const boton = document.getElementById('botonPausa');
const icono = document.getElementById('icono');
const video = document.getElementById('vid');

video.play();
audio.play();

const iconoPausa = `
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5-10h-3v10h3v-10z"/>`;
const iconoReproducir = `
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l8 5-8 5z"/>`;

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You can open up to me", time: 8, stay: 3 },
  { text: "Show me what's inside", time: 9, stay: 4 },
  { text: "Mother nature made us to intertwine", time: 11, stay: 4 },
  { text: "Lavender elixir so", time: 15, stay: 3 },
  { text: "Full of pheromones", time: 17, stay: 3 },
  { text: "Gimme one taste and you're gone", time: 19, stay: 4 },
  
  { text: "What if I can't get you out of my thoughts?", time: 22, stay: 5 },
  { text: "What if my seasons don't change?", time: 26, stay: 4 },
  { text: "What if you forget to forget me not", time: 28, stay: 6 },
  { text: "And we fade away", time: 32, stay: 5 },
  
  { text: "You're my little flower", time: 35, stay: 6 },
  { text: "Blooming in the night", time: 40, stay: 5 },
  { text: "Only for an hour", time: 44, stay: 4 },
  { text: "The northern lights", time: 47, stay: 4 },
  { text: "My casablanca sweetheart", time: 49, stay: 6 },
  { text: "Nectar so divine", time: 54, stay: 5 },
  { text: "Baby you're the best part", time: 58, stay: 5 },
  { text: "Of my life", time: 62, stay: 3 },
  
  { text: "What can I do?", time: 66, stay: 4 },
  { text: "What can I say?", time: 69, stay: 5 },
  { text: "To convince you", time: 71, stay: 6 },
  { text: "To stay", time: 77, stay: 3 },
  
  { text: "All I see are tulips and", time: 81, stay: 3 },
  { text: "I'm a hummingbird", time: 83, stay: 3 },
  { text: "Heavenly ambrosia in every curve", time: 85, stay: 4 },
  { text: "Honey dripping over my imagination", time: 89, stay: 3 },
  { text: "The fragrance keeps flowing straight down to my soul", time: 91, stay: 6 },
  
  { text: "What if I can't get you out of my thoughts?", time: 96, stay: 5 },
  { text: "What if my seasons don't change?", time: 100, stay: 4 },
  { text: "What if you love me then you love me not", time: 102, stay: 6 },
  { text: "And we fade away", time: 106, stay: 5 },
  
  { text: "You're my little flower", time: 109, stay: 6 },
  { text: "Blooming in the night", time: 114, stay: 5 },
  { text: "Only for an hour", time: 118, stay: 4 },
  { text: "The northern lights", time: 121, stay: 4 },
  { text: "My casablanca sweetheart", time: 123, stay: 6 },
  { text: "Nectar so divine", time: 128, stay: 5 },
  { text: "Baby you're the best part", time: 132, stay: 5 },
  { text: "Of my life", time: 136, stay: 3 },
  
  { text: "What can I do?", time: 140, stay: 4 },
  { text: "What can I say?", time: 143, stay: 5 },
  { text: "To convince you", time: 145, stay: 6 },
  { text: "To stay?", time: 151, stay: 3 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.stay
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

boton.addEventListener('click', () => {
  if (!audio.paused) {
      audio.pause();
      video.pause(); // Pausar sonido
      icono.innerHTML = iconoReproducir; // Cambia el texto del botón
  } else {
      audio.play();
      video.play(); // Reanudar sonido
      icono.innerHTML = iconoPausa; // Cambia el texto del botón
  }
});