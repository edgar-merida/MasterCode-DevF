var precio = 0;
var topping = prompt("Bienvenido: Elige el topping para tu helado!");


if (topping == "oreo"){
    precio=10;
    alert("El topping de oreo cuesta: "+precio+" MXN.");
}
else if (topping == "kitkat"){
    precio=15;
    alert("El topping de kitkat cuesta: "+precio+" MXN.");
}
else if (topping == "brownie"){
    precio=20;
    alert("El topping de brownie cuesta: "+precio+" MXN.");
}
else {
    alert("Lo sentimos no contamos con ese topping. El helado sin topping cuesta 50 MXN")
}



