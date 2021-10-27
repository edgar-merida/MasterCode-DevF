var arreglo =[];

function pedirDatos(){

    let color = prompt("Ingrese el color del vehiculo"); 
    let marca = prompt("Ingrese la marca");
    let modelo = prompt("Ingrese el modelo");
    let tipo_de_combustible = prompt("Ingrese el tipo de combustible");
    let tipo_de_transmision = prompt("Ingrese el tipo de transmision");
    let tipo_de_vehiculo = prompt("Ingrese el tipo de vehiculo (automovil ó motocicleta)");
   
    if (tipo_de_vehiculo == "automovil"){
        let tipo_de_automovil = prompt("Ingrese el tipo (Sedan, Camioneta, SUV, entre otros)"); 
        let numero_de_asientos = prompt("Ingrese el numero de asientos");
        let automovil = new Automovil(color, marca, modelo, tipo_de_combustible, tipo_de_transmision, tipo_de_vehiculo);
        arreglo.push(automovil);
        automovil.registrarAutomovil(tipo_de_automovil, numero_de_asientos);
    }
    else if (tipo_de_vehiculo=="motocicleta"){
        let tipo_de_motocicleta = prompt("Ingrese el tipo (Enduro, Turismo, Scooter, Deportiva)"); 
        let motocicleta = new Motocicleta(color, marca, modelo, tipo_de_combustible, tipo_de_transmision, tipo_de_vehiculo);      
        arreglo.push(motocicleta);
        motocicleta.registrarMotocicleta(tipo_de_motocicleta);        
    }
    else {
        let vehiculo= new Vehiculos(color, marca, modelo, tipo_de_combustible, tipo_de_transmision, tipo_de_vehiculo);
        arreglo.push(vehiculo);
        vehiculo.registrarVehiculo();
    }

}
       
let btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener('click', pedirDatos, false);
