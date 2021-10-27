// Usando ciclos WHILE desarrolla el siguiente ejercicio

// Crea un programa que solicite al usuario un día de la semana 
// (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para 
// cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
// En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y
//  terminar la captura de información.

var dia = "";

while (!(dia=="domingo")){
    dia = prompt("Ingresa un dia de la semana en minusculas y sin tildes: ");
    if(dia=="lunes"){
        alert("Ingresaste el dia: "+dia+", te recomendamos un caldo de gallina.");
        dia="";}
    if(dia=="martes"){
        alert("Ingresaste el dia: "+dia+", aun falta mucho para el fin de semana. Animo.");
        dia="";}
    if(dia=="miercoles"){
        alert("Ingresaste el dia: "+dia+", estas en el ombligo de la semana"); 
        dia="";}    
    if(dia=="jueves"){
        alert("Ingresaste el dia: "+dia+", ya puedes romper la dieta.");
        dia="";}
    if(dia=="viernes"){
        alert("Ingresaste el dia: "+dia+", al fin llegaste!!");
        dia="";}
    if(dia=="sabado"){
        alert("Ingresaste el dia: "+dia+", rico para un ceviche y una chelita");
        dia="";}
}

alert("Ingresaste el dia: "+dia+" Ve a descansar.");