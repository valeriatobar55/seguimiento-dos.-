function calcularCosto(tipoLavadora, horas, cantidad) {
    let TARIFA_GRANDE = 4000;
    let TARIFA_PEQUEÑA = 3000;
    let DESCUENTO = 0.03;

    let tarifaPorHora;

    if (tipoLavadora === 1) {
        tarifaPorHora = TARIFA_GRANDE;
    } else if (tipoLavadora === 2) {
        tarifaPorHora = TARIFA_PEQUEÑA;
    } else {
        console.log("Tipo de lavadora no válido.");
        return;
    }

    let costoTotal = tarifaPorHora * horas * cantidad;

    if (cantidad > 3) {
        costoTotal *= (1 - DESCUENTO);
    }

    console.log("El costo total a pagar es: " + costoTotal);
}