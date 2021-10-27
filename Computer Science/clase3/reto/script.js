function getParameters(list) {
    console.table(list);
    let propiedades = Object.keys(list);
    alert("Las propiedades de este nivel son: \n \n" + propiedades.toString().replace(/,/g, "\n"));
}

function sendParameter() {
    let parametro = prompt("Ingrese el nombre de la propiedad a la que desea ingresar: ");
    return parametro;
}

function convertParameter(list, params) {
    let tipoParametro = typeof (list[params]);
    return tipoParametro;
}

alert("BIENVENIDO AL INVENTARIO DE COMPUTADORAS!!! \n Presione Enter para continuar...");
getParameters(computadoras);

let nivel1 = sendParameter();
if (convertParameter(computadoras, nivel1) == ("object")) {
    getParameters(computadoras[nivel1]);
    let nivel2 = sendParameter();
    if (convertParameter(computadoras[nivel1], nivel2) == ("object")) {
        getParameters(computadoras[nivel1][nivel2]);
        let nivel3 = sendParameter();
        if (convertParameter(computadoras[nivel1][nivel2], nivel3) == ("object")) {
            getParameters(computadoras[nivel1][nivel2][nivel3]);
            let nivel4 = sendParameter();
            if (convertParameter(computadoras[nivel1][nivel2][nivel3], nivel4) == ("object")) {
                getParameters(computadoras[nivel1][nivel2][nivel3][nivel4]);
                let nivel5 = sendParameter();
                if (convertParameter(computadoras[nivel1][nivel2][nivel3][nivel4], nivel5) == ("number")){
                    alert("La cantidad en inventario es de: " + computadoras[nivel1][nivel2][nivel3][nivel4][nivel5]);
                } else {
                    alert("El dato ingresado no existe o es incorrecto. Salir...")
                }
            } else {
                alert("El dato ingresado no existe o es incorrecto. Salir...")
            }
        } else {
            alert("El dato ingresado no existe o es incorrecto. Salir...")
        }
    }
    else {
        alert("El dato ingresado no existe o es incorrecto. Salir...")
    }
}
else {
    alert("El dato ingresado no existe o es incorrecto. Salir...")
}


