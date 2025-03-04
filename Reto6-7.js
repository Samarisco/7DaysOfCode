// Objeto para organizar la lista de compras por categorías
let listaCompras = {
    Frutas: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

let continuar = true;

while (continuar) {
    let respuesta = prompt("¿Qué deseas hacer?\n1. Agregar un alimento\n2. Eliminar un alimento\n3. Ver lista de compras\n4. Salir").trim();

    if (respuesta === "1") { // Agregar alimento
        let alimento = prompt("¿Qué alimento deseas agregar?").trim();
        let categoria = prompt("¿En qué categoría encaja?\nOpciones: Frutas, Lácteos, Congelados, Dulces, Otros").trim();

        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase(); // Normaliza la categoría

        if (listaCompras[categoria]) {
            listaCompras[categoria].push(alimento);
            alert(`${alimento} ha sido agregado a la categoría ${categoria}.`);
        } else {
            alert("Categoría no válida. Se agregará a 'Otros'.");
            listaCompras["Otros"].push(alimento);
        }

    } else if (respuesta === "2") { // Eliminar alimento
        let elementosEnLista = Object.values(listaCompras).flat();

        if (elementosEnLista.length === 0) {
            alert("La lista está vacía, no hay elementos para eliminar.");
        } else {
            let eliminar = prompt("Lista actual de alimentos:\n" + elementosEnLista.join(", ") + "\nEscribe el alimento que deseas eliminar:").trim();
            let encontrado = false;

            for (let categoria in listaCompras) {
                let index = listaCompras[categoria].indexOf(eliminar);
                if (index !== -1) {
                    listaCompras[categoria].splice(index, 1);
                    alert(`${eliminar} ha sido eliminado de la lista.`);
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        }

    } else if (respuesta === "3") { // Mostrar lista
        let listaTexto = "Lista de compras:\n";
        for (let categoria in listaCompras) {
            if (listaCompras[categoria].length > 0) {
                listaTexto += `${categoria}: ${listaCompras[categoria].join(", ")}\n`;
            }
        }
        alert(listaTexto || "La lista de compras está vacía.");

    } else if (respuesta === "4") { // Salir
        continuar = false;
        alert("¡Hasta luego!");
    } else {
        alert("Opción no válida. Inténtalo de nuevo.");
    }
}
