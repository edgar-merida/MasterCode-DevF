// //Ejercicio 2
// Pedir al usuario que ingrese un dato, y al finalizar la entrada una función debe 
// mostrar una alerta indicando el tipo de dato ingresado(“Numero, String o Boolean”)
//  con un mensaje personalizado, para saber el tipo de dato usa typeof 

var dato=prompt("Por favor ingresa un dato: ");

alert("El dato ingresado es de tipo: "+validarDato(dato));

function validarDato(dato){
  if ((dato=="false")||(dato=="true")){
    dato = "boolean";    
    }
    else if (isNaN(dato)){
    dato = typeof(dato);
    }     
    else {
    dato = "Numerico"; 
    }    
    return dato;
}



