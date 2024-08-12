let genero = "femenino";  
let edad = 45;          
let apoyo;

if (genero === "femenino") {
    if (edad > 50) {
        apoyo = 120000;
    } else if (edad >= 30 && edad <= 50) {
        apoyo = 100000;
    } else {
        apoyo = 0;
    }
} else if (genero === "masculino") {
    apoyo = 40000;
} else {
    apoyo = 0;
    console.log("Género no válido");
}

console.log("La ayuda mensual es: $" + apoyo);
