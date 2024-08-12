let duracion = "30 días";
let costo;

if (duracion === "15 días") {
    costo = 18000;
} else if (duracion === "30 días") {
    costo = 35000;
} else if (duracion === "3 meses") {
    costo = 86000;
} else {
    costo = 0;
    console.log("Duración no válida");
}

console.log("El costo de la mensualidad es: $" + costo);
