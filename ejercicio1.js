const calcularSalario = (horasTrabajadas) => {
    let tarifaBaja = 30000;
    let tarifaAlta = 33000;
    let horasNormales = 10;

    let salarioTotal;

    if (horasTrabajadas <= horasNormales) {
        salarioTotal = horasTrabajadas * tarifaBaja;
    } else {
        let horasExtras = horasTrabajadas - horasNormales;
        salarioTotal = (horasNormales * tarifaBaja) + (horasExtras * tarifaAlta);
    }

    console.log(`Señor usuario, las horas trabajadas en la semana fueron ${horasTrabajadas}. El pago total de la semana es $${salarioTotal}.`);
};
