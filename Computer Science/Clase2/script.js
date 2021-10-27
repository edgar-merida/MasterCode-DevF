// let frutas = ["manzana","naranja"];
// frutas.push("pera");
// console.log(frutas);
// eliminarUltimo();
// console.log(frutas);

// function eliminarUltimo() {
//     let indice = frutas.length-1;
//     frutas.splice(indice, 1);
    
//     console.log(Array.prototype.indexOf(frutas));
// }


class Cola {
    constructor(){
        this.queue = [];        
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }    

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    print(){
        return this.queue;
    }
}   

const cola = new Cola();
console.log(cola.enqueue("Persona 1"));
console.log(cola.enqueue("Persona 2"));
console.log(cola.peek());
console.log(cola.print());
console.log(cola.size());
