// Objeto para organizar la lista de compras por categorías
let listaCompras = {
    Frutas: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

let agregarMas = true;

while (agregarMas) {
    let respuesta = prompt("¿Quieres agregar un alimento a tu lista de compras? (sí/no)").toLowerCase();

    if (respuesta === "no") {
        agregarMas = false;
    } else if (respuesta === "sí") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría encaja?\nOpciones: Frutas, Lácteos, Congelados, Dulces, Otros").trim();

        // Normalizar la categoría para que coincida con las claves del objeto
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

        // Agregar el alimento a la categoría correspondiente
        if (listaCompras[categoria]) {
            listaCompras[categoria].push(alimento);
        } else {
            alert("Categoría no válida. Se agregará a 'Otros'.");
            listaCompras["Otros"].push(alimento);
        }
    } else {
        alert("Por favor, responde 'sí' o 'no'.");
    }
}

// Imprimir la lista de compras ordenada por categoría
console.log("Lista de compras:");
for (let categoria in listaCompras) {
    if (listaCompras[categoria].length > 0) {
        console.log(`${categoria}: ${listaCompras[categoria].join(", ")}`);
    }
}
