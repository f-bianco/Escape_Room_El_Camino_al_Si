document.addEventListener("DOMContentLoaded", function() {
  crearTablero();
  moverFicha();
  mostrarPregunta();
});

const preguntas = [
  {
    pregunta: "¿Cuál es el plato típico chileno?",
    opciones: ["Arepas", "Empanadas chilenas", "Tacos", "Milanesa"],
    correcta: 1
  },
  {
    pregunta: "¿Qué moneda se usa en Chile?",
    opciones: ["Peso chileno", "Dólar", "Euro", "Sol"],
    correcta: 0
  },
  {
    pregunta: "¿En qué mes es el 18 de septiembre en Chile?",
    opciones: ["Julio", "Septiembre", "Diciembre", "Agosto"],
    correcta: 1
  }
];

let puntaje = 0;
let indice = 0;

const contenido = document.getElementById("contenido");


function mostrarPregunta() {
  if (indice >= preguntas.length) {
    contenido.innerHTML = `<h2>🎉 Terminaste la trivia</h2>
      <p>Obtuviste ${puntaje} de ${preguntas.length} puntos</p>`;
    return;
  }

  const p = preguntas[indice];
  let html = `<h2>${p.pregunta}</h2><ul>`;

  p.opciones.forEach((opcion, i) => {
    html += `<li><button onclick="responder(${i})">${opcion}</button></li>`;
  });

  html += "</ul>";
  contenido.innerHTML = html;
}

function responder(opcionElegida) {
  const p = preguntas[indice];
  if (opcionElegida === p.correcta) {
    puntaje++;
    alert("✅ ¡Correcto!");
  } else {
    alert("❌ Incorrecto");
  }

  indice++;
  mostrarPregunta();
  moverFicha(); // <-- mueve la novia después de cada pregunta
}


// Crear tablero de 32 casilleros
function crearTablero() {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";

  // Posiciones en espiral para 8x4 (ajusta si cambias el tamaño)
  const spiral = [
    [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
    [7,1],[7,2],[7,3],
    [6,3],[5,3],[4,3],[3,3],[2,3],[1,3],[0,3],
    [0,2],[0,1],
    [1,1],[2,1],[3,1],[4,1],[5,1],[6,1],
    [6,2],[5,2],[4,2],[3,2],[2,2],[1,2]
  ];

  for (let i = 0; i < 32; i++) {
    const casilla = document.createElement("div");
    casilla.className = "casillero";
    casilla.id = "casilla-" + i;

    // Posición en la grilla
    const [col, row] = spiral[i];
    casilla.style.gridColumnStart = col + 1;
    casilla.style.gridRowStart = row + 1;

    // Puedes agregar emojis temáticos aquí si quieres
    // casilla.textContent = "💍";

    tablero.appendChild(casilla);
  }
}


// Mueve la novia a la posición actual
function moverFicha() {
  document.querySelectorAll(".ficha").forEach(el => el.remove());

  const posicion = Math.min(puntaje, 31); // No más de 32 casillas
  const casilla = document.getElementById("casilla-" + posicion);

  const ficha = document.createElement("div");
  ficha.className = "ficha";
  ficha.innerHTML = '<img src="MJ_icon.png" alt="Novia" class="ficha-img">';
  casilla.appendChild(ficha);
}
