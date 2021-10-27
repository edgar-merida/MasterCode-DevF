var arreglo = [];
var userInput;

while (!(userInput =="")) {
    userInput = prompt( "Ingrese cualquie caracter: ");
    if(userInput == ""){
    //no hacer nada
    }
    else{
        arreglo.push(userInput);
    }
}
console.log("Introduciste estos valores: "+arreglo);
