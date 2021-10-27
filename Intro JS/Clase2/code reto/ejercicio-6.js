var calificacion = parseFloat(prompt("Ingrese una calificacion de 1 a 10"));

if (calificacion >=1 && calificacion <=10){
    if (calificacion<6){
        alert("Reprobado");
    }
if (calificacion>=6 && calificacion <=8){
        alert("Regular");
    }
if (calificacion==9){
    alert("Bien");
    }
if (calificacion==10){
    alert("Excelente");
    }
}
else {
    alert("Error con el numero ingresado")
}



