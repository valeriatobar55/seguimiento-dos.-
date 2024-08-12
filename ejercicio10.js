let copias= prompt  ("ingrese el numero de copias")
    let costoPorCopia;
    if (copias >= 0 && copias <= 499) {
        costoPorCopia = 120;
    } else if (copias >= 500 && copias <= 749) {
        costoPorCopia = 100;
    } else if (copias >= 750 && copias <= 999) {
        costoPorCopia = 80;
    } else if (copias >= 1000) {
        costoPorCopia = 50;
    } else {
        console.log("Número de copias no válido");
        let 
    }
    
    let costoTotal = copias * costoPorCopia;
    console.log(`El costo por copia es ${costoPorCopia} y el costo total es ${costoTotal}`);
