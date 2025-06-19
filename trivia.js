document.addEventListener("DOMContentLoaded", function() {
  crearTablero();
  moverFicha();
  mostrarPregunta();
});

const preguntas = [
  {
    pregunta: "Pololo significa: __________. Proviene del mapudungún “piwollü” que significa _______",
    opciones: ["mosca", "paloma", "murciélago", "pichón"],
    correcta: 0
  },
  {
    pregunta: "Fome significa:",
    opciones: ["hambre", "sueño", "aburrido", "podrido"],
    correcta: 2
  },
  {
    pregunta: "Pega significa:",
    opciones: ["pegar", "salida", "dinero", "trabajo"],
    correcta: 3
  },
  {
    pregunta: "Sacarle el poto a la jeringa significa:",
    opciones: ["Evadir una responsabilidad o castigo", "Apurarse para hacer algo", "Romper algún objeto", "No darle muchas vueltas a un asunto"],
    correcta: 0
  },
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
  const novioMsg = document.getElementById("novio-msg");
  let msg = "";

  if (opcionElegida === p.correcta) {
    puntaje++;
    msg = `<span style="color:green;font-weight:bold;">¡Correcto!</span>
           <img src="Felipe_sonriente.png" alt="Novio feliz" class="novio-img">`;
  } else {
    msg = `<span style="color:#c0392b;font-weight:bold;">Incorrecto</span>
           <img src="Felipe_triste.png" alt="Novio triste" class="novio-img">`;
  }

  // Mostrar el mensaje y la caja
  novioMsg.innerHTML = msg;
  novioMsg.style.display = "flex";

  // Oculta la caja y el mensaje después de 1.2 segundos
  setTimeout(() => {
    novioMsg.style.display = "none";
    novioMsg.innerHTML = "";
  }, 1200);

  indice++;
  mostrarPregunta();
  moverFicha();
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
