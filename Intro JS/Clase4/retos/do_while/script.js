// Usando ciclos DO WHILE desarrolla el siguiente ejercicio
// Crea un programa que permita el ingreso de datos de tipo numero por medio de prompt, 
// si el dato no es un numero mostrar un mensaje que diga que el dato ingresado no es un numero, 
// si el dato es un numero muestra un alert con el numero, para terminar el programa tienes 
// que escribir la palabra: Salir o Terminar

var numero = 0;
var stop = 0;

do {
    numero = prompt("Ingresa un numero ó las palabras (salir / terminar) ");

    if (isNaN(numero)){
        alert("El dato ingresado no es un numero");
        }
        else {
        alert("El numero ingresado es: "+numero);
        }

    if(numero == "salir"||numero=="terminar"){
        stop=1;
    }

        
    }
    while (stop == 0);
    
        
        
    

