function buscar(valor, lista) {
    console.time("Con secuencial");
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element == valor) {
            console.timeEnd("Con secuencial");
        }
    }
};

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
    console.time("Con binario");
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    console.timeEnd("Con binario");
    return position;
}

let lista = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// index =  [ 0,   1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  13,  14,  15,   16,  17,  18, 19,  20,  21,  22,  23,  24,  25];


buscar("f", lista);
alert(binarySearch("f", lista));

