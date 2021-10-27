let computadora={
    marca: "Toshiba",
    modelo: "Satelite 650",
    memoria_RAM: 4,
    pantalla: 15,
    disco_duro: 500,
    color: "negro",
    procesador: "i3",
    sistema1: "Windows",
    sistema2: "linux",
    dañada: "no"
}

function llamarObjeto(objeto){
    document.write("marca: "+computadora.marca+"<br />");
    document.write("modelo: "+computadora.modelo+"<br />");
    document.write("memoria_RAM: "+computadora.memoria_RAM+"<br />");
    document.write("pantalla: "+computadora.pantalla+"<br />");
    document.write("disco_duro: "+computadora.disco_duro+"<br />");
    document.write("color: "+computadora.color+"<br />");
    document.write("procesador: "+computadora.procesador+"<br />");
    document.write("sistema1: "+computadora.sistema1+"<br />");
    document.write("sistema2: "+computadora.sistema2+"<br />");
    document.write("dañada: "+computadora.dañada+"<br />");
    }

llamarObjeto(computadora);
preguntar();

function preguntar(){
    var pregunta=prompt("Deseas actualizar algun dato? ");
    if(pregunta=="si"){
    var respuesta=prompt("¿Qué propiedad deseas actualizar? (escribe el nombre)");
    cambiarValor(respuesta);
    }
}

function cambiarValor(dato){
    var propiedad = String(dato);
    console.log("El valor actual es: "+computadora[propiedad]);
    var cambio = prompt("Ingrese el nuevo valor: ");
    computadora[propiedad]=cambio;
    console.log("El nuevo valor de la propiedad es: "+computadora[propiedad])
    console.table(computadora);
    document.writeln("<br />")
    llamarObjeto(computadora);
}




