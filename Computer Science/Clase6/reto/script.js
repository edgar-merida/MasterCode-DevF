let lista1 = [80, 45, 12, 9, 52, 79, 9, 3, 2, 4, 5, 65, 15, 14, 1, 3];
let lista2 = ["h", "t", "p", "a", "l", "w", "q", "b", "u", "m", "s", "v", "c"];

console.log("El arreglo 1 sin orden es: ");
console.log(lista1)
console.log("El arreglo 2 sin orden es: ");
console.log(lista2)

//1. Crea una función que ordene de forma descendente un arreglo de números
function ordenarDescendente(lista) {

    for (let index1 = 0; index1 < lista.length; index1++) {
        for (let index2 = 0; index2 < lista.length - 1 - index1; index2++) {
            if (lista[index2] < lista[index2 + 1]) {
                [lista[index2], lista[index2 + 1]] = [lista[index2 + 1], lista[index2]]
            }
        }
    }
    return lista;
};
console.log("1. Crea una función que ordene de forma descendente un arreglo de números");
console.log(ordenarDescendente(lista1));

//2. Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
function ordenarString(lista) {
    for (let index = 0; index < lista.length; index++) {
        for (let index2 = 0; index2 < lista.length - 1 - index; index2++) {
            if (lista[index2].charCodeAt(0) > lista[index2 + 1].charCodeAt(0)) {
                [lista[index2], lista[index2 + 1]] = [lista[index2 + 1], lista[index2]]
            }
        }
    }
    return lista;
};
console.log("2. Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii");
console.log(ordenarString(lista2));