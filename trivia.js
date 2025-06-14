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
}

mostrarPregunta();

