let calcular= prompt (calcularCostoSandwich(tamaño, ingredientes)) 
   
    let costoBase = tamaño === 'grande' ? 12000 : 6000;
    
   
    const preciosIngredientes = {
        tocineta: 3000,
        pavo: 3000,
        queso: 2500,
        jalapeno: 0 
    };

   
    let costoIngredientes = 0;
    
    for (const ingrediente of ingredientes) {
        if (preciosIngredientes[ingrediente] !== undefined) {
            costoIngredientes += preciosIngredientes[ingrediente];
        }
    }
    

    let costoTotal = costoBase + costoIngredientes;

   
    console.log(`El costo total del sándwich es ${costoTotal} pesos.`);



const tamaño = 'grande'; 
const ingredientes = ['tocineta', 'queso']; 
calcularCostoSandwich(tamaño, ingredientes);
