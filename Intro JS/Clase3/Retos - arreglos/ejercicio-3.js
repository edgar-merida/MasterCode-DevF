let arreglo=[10,40,30,20,15,5];
let mayor= parseInt(Math.max(...arreglo));
let menor= parseInt(Math.min(...arreglo));

arreglo.sort(function(a,b){return a-b});

alert("El array en orden de menor a mayor es: "+arreglo);

document.writeln("<br/>El numero mayor es: "+parseInt(mayor)); 
document.writeln("<br/>El numero mayor es: "+parseInt(menor));

console.log(arreglo);
console.log("valor maximo: ",+mayor);
console.log("valor minimo: ",+menor);
