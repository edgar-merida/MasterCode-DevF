let automovilList = {
    marcas: {
        toyotas: [
            carro1 = {
                modelo: "supra",
                llantas: 3,
                motor: {
                    numeroCilindros: 4,
                    tipoMotor: "combustion",
                    pistones: {
                        numeroPistones: 5,
                        filtroDeAceite: {
                            tipo: "Alto Kilometraje"
                        }
                    }
                }
            }
        ],

        hondas: [
            carro2 = {
                modelo: "civic",
                llantas: 4,
                motor: {
                    numeroCilindros: 4,
                    tipoMotor: "combustion",
                    pistones: {
                        numeroPistones: 5,
                        filtroDeAceite: {
                            tipo: "Sintetico"
                        }
                    }
                }
            }
        ]
    }
};

function getCars(aCars) {
    console.log(aCars.marcas.toyotas);
    aCars.marcas.toyotas.forEach(item => {
        console.log(item);

    });
}

getCars(automovilList);