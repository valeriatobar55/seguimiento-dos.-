let promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;

let calificacionGeneral;

if (promedio >= 0 && promedio < 6) {
    calificacionGeneral = "mala";
} else if (promedio >= 6 && promedio <= 8) {
    calificacionGeneral = "buena";
} else {
    calificacionGeneral = "excelente";
}

console.log("Promedio: " + promedio);
console.log("Calificación general: " + calificacionGeneral);