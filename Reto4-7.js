// Generar un número aleatorio entre 0 y 10
const numeroSecreto = Math.floor(Math.random() * 11);
let intentos = 3;
let acertaste = false;

alert("¡Bienvenido al juego de adivinar el número! Tienes 3 intentos para adivinar un número entre 0 y 10.");

while (intentos > 0) {
    let respuesta = parseInt(prompt("Introduce tu número:"));

    if (respuesta === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número ${numeroSecreto}. 🎉`);
        acertaste = true;
        break;
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Incorrecto. Te quedan ${intentos} intentos.`);
        }
    }
}

if (!acertaste) {
    alert(`¡Oh no! No lograste adivinar el número. Era ${numeroSecreto}. 😢`);
}

alert("Gracias por jugar. ¡Vuelve a intentarlo! 🎮");
