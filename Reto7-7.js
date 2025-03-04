// Definimos las funciones para cada operación matemática
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero.";
    }
    return a / b;
}

// Función principal de la calculadora
function calculadora() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "Selecciona una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir"
        ).trim();

        if (opcion === "5") {
            alert("Hasta la próxima.");
            continuar = false;
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: Ingresa números válidos.");
            continue;
        }

        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case "2":
                resultado = restar(num1, num2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                alert(`El resultado de la división es: ${resultado}`);
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    }
}

// Ejecutamos la calculadora
calculadora();
