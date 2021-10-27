let numeros = [4,3,2,1];
const ordenamientoBurbuja = (arreglo) => {
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
        //const element = arreglo[uno];
        for (let dos = 0; dos < length - 1 - uno; dos++) {
           // const element = array[dos];
            if (arreglo[dos]> arreglo[dos+1]){
                [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos + 1], arreglo[dos]];
            }
        }
        
    }
return arreglo
}

console.log ("Este es ordenamento burbuja: "+ordenamientoBurbuja(numeros));

//let arrregloSort = numeros.sort(function(a, b){return a-b;});
//console.log(arrregloSort);