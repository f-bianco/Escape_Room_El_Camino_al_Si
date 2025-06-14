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

mostrarPregunta();

// Crear tablero de 32 casilleros
function crearTablero() {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = ""; // Limpia si ya existe

  for (let i = 0; i < 32; i++) {
    const casilla = document.createElement("div");
    casilla.className = "casillero";
    casilla.id = "casilla-" + i;
    casilla.innerText = i + 1;
    // Mostrar 🇦🇷 en la primera y 🇨🇱 en la última
    if (i === 0) {
      casilla.innerText = "🇦🇷";
    } else if (i === 31) {
      casilla.innerText = "🇨🇱";
    } else {
      casilla.innerText = i + 1;
    }
    // Añadir un borde especial a la última casilla
    if (i === 31) {
      casilla.style.border = "2px solid red";
    }
    // Añadir un borde especial a la primera casilla
    if (i === 0) {
      casilla.style.border = "2px solid blue";
    }
    // Añadir un borde especial a la casilla 16
    if (i === 15) {
      casilla.style.border = "2px solid green";
    }
    // Añadir un borde especial a la casilla 8
    if (i === 7) {
      casilla.style.border = "2px solid orange";
    }
    // Añadir un borde especial a la casilla 24
    if (i === 23) {
      casilla.style.border = "2px solid purple";
    }
    // Añadir un borde especial a la casilla 4
    if (i === 3) {
      casilla.style.border = "2px solid yellow";
    }
    // Añadir un borde especial a la casilla 12
    if (i === 11) {
      casilla.style.border = "2px solid pink";
    }
    // Añadir un borde especial a la casilla 20
    if (i === 19) {
      casilla.style.border = "2px solid cyan";
    }
    // Añadir un borde especial a la casilla 28
    if (i === 27) {
      casilla.style.border = "2px solid brown";
    }
    tablero.appendChild(casilla);
  }

  moverFicha();
}

// Mueve la novia a la posición actual
function moverFicha() {
  document.querySelectorAll(".ficha").forEach(el => el.remove());

  const posicion = Math.min(puntaje, 31); // No más de 32 casillas
  const casilla = document.getElementById("casilla-" + posicion);

  const ficha = document.createElement("div");
  ficha.className = "ficha";
  ficha.innerText = "👰"; // Emoji de novia
  casilla.appendChild(ficha);
}
crearTablero();