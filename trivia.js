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
  },
  {
  pregunta: "Ponerle pino significa:",
    opciones: ["Retrasar un trabajo", "Hacer algo con motivación y esfuerzo", "Decorar algún objeto o comida", "Ponerle mucho picante a la comida"],
    correcta: 1,
    codigo: "0045",
    explicacion: "La respuesta correcta es hacer algo con motivación y esfuerzo. Viene de rellenar harto la empanada (preparación chilena) con pino (sofrito de carne y cebolla).",
    respondida: false
  },
  {
  pregunta: "Copucha o copuchar significa:",
    opciones: ["Chisme", "Pelea", "Comprar compulsivamente", "Beber demasiado"],
    correcta: 0,
    codigo: "0278",
    explicacion: "La respuesta correcta es Chisme. Aquí nos encontramos con variadas ideas respecto a su origen. Una es que viene del quechua, “q’upucha”, que significa “charla” o “conversación”. La segunda dice que viene de “copa”, y se referiría a las conversaciones que suceden después de tomarse un par de tragos. Otra, que viene del mapudungún “puchuchu”, que significa vejiga del animal vacuno, inflada y seca. La parte de “inflar”, como sucede con las copuchas, explicaría la idea.",
    respondida: false
  },
  {
  pregunta: "Arrastrando el poncho significa:",
    opciones: ["Ser haragán, procrastinar", "Caminar muy despacio", "Guardar rencor", "Provocar a alguien para que se disguste"],
    correcta: 3,
    codigo: "GH87",
    explicacion: "La respuesta correcta es Provocar a alguien para que se disguste. Dicen que la expresión nació en la pampa argentina, cuando un gaucho se enojaba. Supuestamente, este acercaba al contrincante y arrastraba el poncho por sus pies. Si el aludido lo pisaba en respuesta, significaba duelo inmediato.",
    respondida: false,
    imagenPregunta: "Fondos/poncho.png",
    imagenCorrecta: "Fondos/Poncho_correcta.png"
  },
  {
  pregunta: "Sacar los choros del canasto significa:",
    opciones: ["Ordenar la casa, tirando lo que no sirve", "Revelar secretos de otra persona", "Traer a la conversación viejas disputas", "Hartarse, perder la paciencia"],
    correcta: 3,
    codigo: "OP90",
    explicacion: "La respuesta correcta es Hartarse, perder la paciencia.",
    respondida: false,
    imagenPregunta: "Fondos/Choros.png",
    imagenCorrecta: "Fondos/Choros_correcta.png"
  },
  {
  pregunta: "Peinar la muñeca significa:",
    opciones: ["Persona loca", "Propenso a la pelea", "Que le gusta pagar toda la cuenta", "Hablar bien de alguien"],
    correcta: 0,
    codigo: "FJ16",
    explicacion: "La respuesta correcta es Persona loca.",
    respondida: false,
    imagenCorrecta: "Fondos/Muneca_correcta.png",
    imagenPregunta: "Fondos/Muneca.png"
  },
  {
  pregunta: "Echar la foca significa:",
    opciones: ["Vomitar", "Sacarse un peso de encima", "Regañar a alguien", "Dormir una siesta muy larga"],
    correcta: 2,
    codigo: "MJ23",
    explicacion: "La respuesta correcta es Regañar a alguien. Aludiría al comportamiento agresivo de los lobos marinos, a veces confundidos con las focas, usadas metafóricamente para referirse a un regaño.",
    respondida: false,
    imagenPregunta: "Fondos/Foca.png",
    imagenCorrecta: "Fondos/Foca_correcta.png"
  },
  {
  pregunta: "Yapo significa:",
    opciones: ["Una fruta típica del sur de Chile", "Sí o apúrate", "Habitación donde se duerme", "Abuelo"],
    correcta: 1,
    codigo: "MAJ0",
    explicacion: "La respuesta correcta es Sí o apúrate. Contracción de “ya pues”, usado para insistir en una acción.",
    respondida: false,
    imagenCorrecta: "Fondos/Yapo_correcta.png"
  },
  {
  pregunta: "¿Cuántas regiones tiene Chile?",
    opciones: ["13", "16", "18", "20"],
    correcta: 1,
    codigo: "FEL1",
    explicacion: "La respuesta correcta es 16. Las regiones son el equivalente a provincias nuestras y las provincias chilenas son el equivalente a ciudades nuestras.",
    respondida: false,
    imagenCorrecta: "Fondos/Regiones_correcta.png"
  },
  {
  pregunta: "Aproximadamente, ¿cuál es la población de Chile?",
    opciones: ["10 millones (como Portugal)", "19 millones (como Buenos Aires)", "35 millones (como Canadá)", "50 millones (como Colombia)"],
    correcta: 1,
    codigo: "CHI7",
    explicacion: "La respuesta correcta es 19 millones (como Buenos Aires).",
    respondida: false,
    imagenPregunta: "Fondos/Poblacion.png",
    imagenCorrecta: "Fondos/Poblacion_correcta.png"
  },
  {
  pregunta: "¿Cuál de estos récords mundiales pertenece a Chile?",
    opciones: ["El desierto más seco del mundo", "La montaña más alta de Sudamérica", "La playa más larga del mundo", "La ciudad más lluviosa del planeta"],
    correcta: 0,
    codigo: "AL3D",
    explicacion: "La respuesta correcta es El desierto más seco del mundo. El Desierto de Atacama es tan seco que en algunos lugares no ha llovido en más de 400 años",
    respondida: false,
    imagenCorrecta: "Fondos/Record_correcta.png"
  },
  {
  pregunta: "¿Cuál es el nombre de la avenida más importante de Santiago, que atraviesa la ciudad de este a oeste?",
    opciones: ["Avenida Providencia", "Avenida Vicuña Mackenna", "Avenida Alameda Libertador Bernardo O'Higgins", "Avenida Apoquindo"],
    correcta: 2,
    codigo: "AY8U",
    explicacion: "La respuesta correcta es Avenida Alameda Libertador Bernardo O'Higgins",
    respondida: false
  },
  {
  pregunta: "¿Cuál es el lago más grande de Chile?",
    opciones: ["Lago Villarrica", "Lago Llanquihue", "Lago General Carrera", "Lago Ranco"],
    correcta: 2,
    codigo: "P4TR",
    explicacion: "La respuesta correcta es Lago General Carrera. Este lago es compartido con Argentina, donde se llama Lago Buenos Aires. Además, es famoso por sus increíbles formaciones rocosas, como las Catedrales de Mármol",
    respondida: false
  },
  {
  pregunta: "¿Cuánto es la distancia para ir desde Argentina al Océano Pacífico cerca del Bolsón, (Arg) y Chiloé (Chile)? (Una de las zonas más angostas)",
    opciones: ["70 km", "22 km", "100 km", "10 km"],
    correcta: 1,
    codigo: "AUX3",
    explicacion: "La respuesta correcta es 22 km.",
    respondida: false
  },
  {
  pregunta: "¿Qué animal es considerado el símbolo nacional de Chile?",
    opciones: ["Cóndor", "Puma", "Huemul", "Llama"],
    correcta: 2,
    codigo: "C3C1",
    explicacion: "La respuesta correcta es Huemul. El huemul, un ciervo andino en peligro de extinción, aparece en el escudo nacional de Chile junto con el cóndor.",
    respondida: false
  },
  {
  pregunta: "¿Cuál de estos eventos realmente ocurrió en Chile?",
    opciones: ["Una ciudad fue cubierta por cenizas volcánicas", "Un meteorito cayó en plena Plaza de Armas de Santiago", "Un lago desapareció de la noche a la mañana", "Un tsunami arrasó con un tren en movimiento"],
    correcta: 2,
    codigo: "0006",
    explicacion: "La respuesta correcta es Un lago desapareció de la noche a la mañana. En 2007, el Lago Témpanos, en la Patagonia, simplemente desapareció, dejando solo un cráter vacío. Se cree que una fisura en el suelo drenó el agua.",
    respondida: false
  },
  {
  pregunta: "¿Qué hace especial a la momia más antigua del mundo, encontrada en Chile?",
    opciones: ["Es la única momia con tatuajes prehistóricos", "Es más antigua que las momias egipcias", "Fue momificada naturalmente por el desierto", "Es la única momia con órganos intactos"],
    correcta: 1,
    codigo: "1188",
    explicacion: "La respuesta correcta es Es más antigua que las momias egipcias. Las momias de la cultura Chinchorro, halladas en el norte de Chile, tienen más de 7.000 años, superando en antigüedad a las egipcias.",
    respondida: false
  },
  {
  pregunta: "¿Cuál de estos récords Guinness tiene Chile?",
    opciones: ["La mayor cantidad de personas bailando cueca al mismo tiempo", "La fogata más grande del mundo", "El mayor asado de carne en un solo evento", "La mayor cantidad de gente comiendo completo al mismo tiempo"],
    correcta: 3,
    codigo: "AAAH",
    explicacion: "La respuesta correcta es La mayor cantidad de gente comiendo completo al mismo tiempo. En 2016, más de 2.000 personas participaron en este récord en Providencia, Santiago",
    respondida: false
  },
  {
  pregunta: "¿Qué bebida alcohólica es tradicionalmente chilena y ha generado disputa con Perú por su origen?",
    opciones: ["Vino carmenere", "Chicha", "Pisco", "Terremoto"],
    correcta: 2,
    codigo: "OUCH",
    explicacion: "La respuesta correcta es Pisco.",
    respondida: false
  },
  {
  pregunta: "¿Cuál es el baile nacional de Chile?",
    opciones: ["Cueca", "Tango", "Marinera", "Cumbia"],
    correcta: 0,
    codigo: "YUPI",
    explicacion: "La respuesta correcta es Cueca. La cueca fue declarada baile nacional en 1979 y se baila especialmente durante las Fiestas Patrias, representando el cortejo entre un gallo y una gallina.",
    respondida: false
  },
  {
  pregunta: "¿Qué instrumento musical es típico de la música folclórica chilena?",
    opciones: ["Charango", "Guitarra", "Arpa", "Quena"],
    correcta: 0,
    codigo: "JUJU",
    explicacion: "La respuesta correcta es Charango.",
    respondida: false
  },
  {
  pregunta: "¿En qué fecha se celebra la Independencia de Chile?",
    opciones: ["18 de septiembre", "12 de octubre", "21 de mayo", "25 de diciembre"],
    correcta: 0,
    codigo: "JAA4",
    explicacion: "La respuesta correcta es 18 de septiembre. El 18 de septiembre de 1810 se realizó la Primera Junta Nacional de Gobierno, marcando el inicio del proceso de independencia de Chile",
    respondida: false
  },
  {
  pregunta: "¿Qué batalla clave para la independencia de Chile se libró el 5 de abril de 1818?",
    opciones: ["Batalla de Chacabuco", "Batalla de Maipú", "Batalla de Rancagua", "Batalla de Lircay"],
    correcta: 1,
    codigo: "MIL1",
    explicacion: "La respuesta correcta es Batalla de Maipú. Esta batalla, liderada por Bernardo O’Higgins y José de San Martín, consolidó la independencia de Chile frente a España",
    respondida: false
  },
  {
  pregunta: "¿En qué fecha se celebra el Día de la Bandera en Chile?",
    opciones: ["9 de julio", "16 de julio", "9 de diciembre", "16 de diciembre"],
    correcta: 0,
    codigo: "FL02",
    explicacion: "La respuesta correcta es Batalla de Maipú. Se recuerda la Batalla de La Concepción (1882), donde un grupo de soldados chilenos defendió heroicamente la bandera hasta la muerte en la Guerra del Pacífico",
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
  let html = "";

  // Si hay imagen de pregunta, la muestra arriba
  if (p.imagenPregunta) {
    html += `<div style="text-align:center; margin-bottom:1rem;">
               <img src="${p.imagenPregunta}" alt="" style="max-width:300px; max-height:180px; border-radius:18px; box-shadow:0 2px 16px #e1bee7;">
             </div>`;
  }

  html += `<h2>${p.pregunta}</h2><ul>`;
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

  const esCasillaLlave = idx === 7 && opcionElegida === p.correcta;

  if (opcionElegida === p.correcta) {
    puntaje++;
    msg = `<span style="color:green;font-weight:bold;">¡Correcto!</span>
           <img src="Felipe_sonriente.png" alt="Novio feliz" class="novio-img"><br>
           ${p.imagenCorrecta ? `<img src="${p.imagenCorrecta}" alt="" style="max-width:300px; max-height:180px; border-radius:18px; margin-top:1rem;">` : ""}
           <span style="font-size:1.2rem;">${p.explicacion}</span>`;
  } else {
    msg = `<span style="color:#c0392b;font-weight:bold;">Incorrecto</span>
           <img src="Felipe_triste.png" alt="Novio triste" class="novio-img"><br>
           ${p.imagenCorrecta ? `<img src="${p.imagenCorrecta}" alt="" style="max-width:300px; max-height:180px; border-radius:18px; margin-top:1rem;">` : ""}
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
        // Muestra la imagen final
      const finalDiv = document.getElementById("final-imagen");
      finalDiv.innerHTML = `<img src="Casamiento_acuarela.png" alt="¡Felicitaciones!">`;
      finalDiv.style.display = "flex";
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
    } else if (i === 15) {
      casilla.innerHTML = `<span class="casilla-numero" style="font-size:2rem;">🔍</span>`;
    } else if (i === 10) {
      casilla.innerHTML = `<span class="casilla-numero" style="font-size:2rem;">🎁</span>`;
    } else  if (i === 20) {
      casilla.innerHTML = `<span class="casilla-numero" style="font-size:2rem;">🎁</span>`;
    } else if (i === 32) {
      casilla.innerHTML = `<span class="casilla-numero" style="font-size:2rem;">🏁</span>`;
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
