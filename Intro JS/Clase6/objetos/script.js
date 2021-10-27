let usuario = {
    nombre: "Mario",
    email: "mario.lopez@gmail.com",
    password: "123mario", 
    edad: 25,
    telefono: "9090909091" 
};


function MostrarInformacionUsuario( usuario ){
    console.log(usuario.nombre);
    return usuario.password;
}

MostrarInformacionUsuario(usuario);

let carro ={
    color: "rojo", 
    llantas: 4,
    modelo: "R8", 
    marca: "AUDI",
    encender: function(){
        return"El carro esta encedido";
    },
    apagar: function(){
        return"Apagar carro";
    },
    llenarCombustrible: function(confirmacion){
        if (confirmacion === "si"){
            return "Su tanque a sido llenado";
        }else {
            return "No se ha llenado su tanque";
        };
    },
    informacionColorLlantas: function(){
        return "El color del vehiculo es "+this.color+ " Y tiene "+this.llantas+ " llantas";
    },
    motor: {
        nitro: true,
        turbo: false,
        cilindros: 8
    },
    informacionMotor: function(){
        return "El motor tiene "+ this.motor.cilindros +" cilindros";
    }
};

function InformacionVehiculo( vehiculo ){
    console.log(vehiculo.encender());
    console.log(vehiculo.apagar());
    console.log(vehiculo.llenarCombustrible("si"));
    console.log(vehiculo.informacionColorLlantas());
    console.log(vehiculo.informacionMotor());
    console.log("El vehiculo tiene nitro ?"+vehiculo.motor.nitro);   
    console.log(vehiculo.color);
    console.log(vehiculo.llantas);
    console.log(vehiculo.modelo);
    console.log(vehiculo.marca); 
};

InformacionVehiculo(carro);