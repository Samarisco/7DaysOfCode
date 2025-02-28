// Preguntar al usuario por el área de desarrollo
const area = prompt("¿Quieres seguir en el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')");

let tecnologia = "";

if (area === "Front-End") {
    tecnologia = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
    tecnologia = prompt("¿Quieres aprender C# o Java?");
} else {
    alert("Opción no válida. Por favor, ingresa 'Front-End' o 'Back-End'.");
}

// Preguntar si quiere especializarse o volverse Fullstack
const especializacion = prompt(`¿Quieres especializarte en ${area} o volverte Fullstack? (Escribe 'Especializarme' o 'Fullstack')`);

if (especializacion === "Especializarme") {
    alert(`¡Genial! Sigue profundizando en ${tecnologia} y te convertirás en un experto en ${area}.`);
} else if (especializacion === "Fullstack") {
    alert("¡Excelente decisión! Aprender tanto Front-End como Back-End te dará más oportunidades en el mundo del desarrollo.");
} else {
    alert("Opción no válida. Debes escribir 'Especializarme' o 'Fullstack'.");
}

// Preguntar sobre otras tecnologías
let seguirAprendiendo = true;

while (seguirAprendiendo) {
    let nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    
    if (nuevaTecnologia) {
        alert(`¡${nuevaTecnologia} es una gran elección! Aprender más tecnologías siempre es beneficioso.`);
    }

    let respuesta = prompt("¿Quieres agregar otra tecnología? Responde 'ok' para sí o cualquier otra tecla para salir.");

    if (respuesta.toLowerCase() !== "ok") {
        seguirAprendiendo = false;
    }
}

alert("¡Gracias por participar en este juego de decisiones! Sigue aprendiendo y creciendo como desarrollador.");
