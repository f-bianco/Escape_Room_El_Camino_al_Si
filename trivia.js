document.addEventListener("DOMContentLoaded", function() {
  crearTablero();
  moverFicha();
  mostrarIngresoCodigo(); // <-- Esta función debe llamarse al inicio
});

const preguntas = [
  {
    pregunta: "Pololo significa: __________. Proviene del mapudungún “piwollü” que significa _______",
    opciones: ["mosca", "paloma", "murciélago", "pichón"],
    correcta: 0,
    codigo: "1234",
    explicacion: "La respuesta correcta es mosca, refiriéndose a la cercanía y el revoloteo característico de los enamorados",
    respondida: false
  },
  {
    pregunta: "Fome significa:",
    opciones: ["hambre", "sueño", "aburrido", "podrido"],
    correcta: 2,
    codigo: "AEF5",
    explicacion: "La respuesta correcta es aburrido",
    respondida: false
  },
  {
    pregunta: "Pega significa:",
    opciones: ["pegar", "salida", "dinero", "trabajo"],
    correcta: 3,
    codigo: "B2C3",
    explicacion: "La respuesta correcta es trabajo. Viene de “pegar”, refiriéndose a estar pegado a una ocupación, aunque otras teorías dicen que viene del trabajo de pegar piedras durante la construcción del puente Cal y Canto en Santiago",
    respondida: false
  },
  {
    pregunta: "Sacarle el poto a la jeringa significa:",
    opciones: ["Evadir una responsabilidad o castigo", "Apurarse para hacer algo", "Romper algún objeto", "No darle muchas vueltas a un asunto"],
    correcta: 0,
    codigo: "D489",
    explicacion: "La respuesta correcta es evadir una responsabilidad o castigo.",
    respondida: false
  },
  {
    pregunta: "Paco significa:",
    opciones: ["Droga", "Alguien de bajos recursos", "Policía", "Alguien coqueto"],
    correcta: 2,
    codigo: "F1A2",
    explicacion: "La respuesta correcta es policía. Una de las ideas más aceptadas es que el término derivaba de una sigla alusiva a la frase “Personal a Contrata de Orden y Seguridad” (P.A.C.O.S)",
    respondida: false
  },
  {
    pregunta: "Pichanga significa:",
    opciones: ["Partido informal de fútbol", "Fiesta con amigos", "Bastón usado como arma", "Mentira para dar excusas"],
    correcta: 0,
    codigo: "C352",
    explicacion: "La respuesta correcta es partido informal de fútbol. Viene de “pichanga”, un platillo chileno que mezcla varios ingredientes, aludiendo a la mezcla informal de jugadores en estos partidos. También se dice que “pichanga” es de origen quechua, derivada del verbo “pichay”, que significa limpiar.",
    respondida: false
  },
  {
    pregunta: "Pegarse el alcachofazo significa:",
    opciones: ["Pegarse con un alcaucil en la cabeza", "Caerse de un porrazo", "Darse cuenta o entender de algo", "Emborracharse"],
    correcta: 2,
    codigo: "E490",
    explicacion: "La respuesta correcta es darse cuenta o entender de algo. Es un derivado la frase “pegarse la cachá” que, como explicamos, viene de “cachar”, que es entender o saber una cosa.",
    respondida: false
  },
  {
  pregunta: "Carrete significa:",
    opciones: ["Piercing", "Álbum de fotos", "Automóvil antiguo", "Fiesta"],
    correcta: 3,
    codigo: "B100",
    explicacion: "La respuesta correcta es Fiesta. Se relaciona con “carreta”, sugiriendo el movimiento y jolgorio de una fiesta, similar a una carreta en marcha o de un carrete. El origen del término sería español, más que chileno, pero aquí es popular para hablar de fiesta.",
    respondida: false
  },
  {
  pregunta: "Andar pato significa:",
    opciones: ["Caminar chueco", "Estar sin dinero", "Estar triste", "Sentirse feliz"],
    correcta: 1,
    codigo: "A200",
    explicacion: "La respuesta correcta es Estar sin dinero. La expresión, se dice, viene del movimiento de buscar en los bolsillos para comprobar si hay dinero y luego levantarlas para decir que no tiene nada, como el aleteo de un pato.",
    respondida: false
  }
];

let puntaje = 0;
let indice = 0;

const contenido = document.getElementById("contenido");


function mostrarIngresoCodigo() {
  contenido.innerHTML = `
    <h2>Ingresa el código de la pregunta:</h2>
    <input type="text" id="codigo-input" autocomplete="off">
    <button onclick="verificarCodigo()">Verificar</button>
    <div id="codigo-error" style="color:#c0392b; margin-top:8px;"></div>
  `;
}

function verificarCodigo() {
  const input = document.getElementById("codigo-input").value.trim();
  const errorDiv = document.getElementById("codigo-error");
  // Busca la pregunta por código y que no esté respondida
  const idx = preguntas.findIndex(p => p.codigo === input && !p.respondida);

  if (idx !== -1) {
    mostrarPreguntaReal(idx);
  } else {
    errorDiv.textContent = "Código incorrecto o pregunta ya respondida.";
  }
}

function mostrarPreguntaReal(idx) {
  const p = preguntas[idx];
  let html = `<h2>${p.pregunta}</h2><ul>`;
  p.opciones.forEach((opcion, i) => {
    html += `<li><button onclick="responder(${idx},${i})">${opcion}</button></li>`;
  });
  html += "</ul>";
  contenido.innerHTML = html;
}

function responder(idx, opcionElegida) {
  const p = preguntas[idx];
  const novioMsg = document.getElementById("novio-msg");
  let msg = "";

  if (opcionElegida === p.correcta) {
    puntaje++;
    msg = `<span style="color:green;font-weight:bold;">¡Correcto!</span>
           <img src="Felipe_sonriente.png" alt="Novio feliz" class="novio-img"><br>
           <span style="font-size:1.2rem;">${p.explicacion}</span>`;
  } else {
    msg = `<span style="color:#c0392b;font-weight:bold;">Incorrecto</span>
           <img src="Felipe_triste.png" alt="Novio triste" class="novio-img"><br>
           <span style="font-size:1.2rem;">${p.explicacion}</span>`;
  }

  novioMsg.innerHTML = msg;
  novioMsg.style.display = "flex";

  // Agrega el event listener para cerrar al hacer click
  novioMsg.onclick = null; // antes de asignar el nuevo
  novioMsg.onclick = function() {
    novioMsg.style.display = "none";
    novioMsg.innerHTML = "";
    p.respondida = true;

    // Si todas respondidas, muestra final
    if (preguntas.every(q => q.respondida)) {
      contenido.innerHTML = `<h2>🎉 Terminaste la trivia</h2>
        <p>Obtuviste ${puntaje} de ${preguntas.length} puntos</p>`;
    } else {
      mostrarIngresoCodigo();
    }
    moverFicha();
    // Limpia el event listener para evitar duplicados
    novioMsg.onclick = null;
  };
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

    // Número o emoji especial
    if (i === 7) {
      casilla.innerHTML = `<span class="casilla-numero" style="font-size:2rem;">🔑</span>`;
    } else {
      casilla.innerHTML = `<span class="casilla-numero">${i + 1}</span>`;
    }
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
