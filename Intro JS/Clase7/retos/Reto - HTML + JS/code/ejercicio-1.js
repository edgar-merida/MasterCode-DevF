var costoProductos = {
    Aqua: 200,
    Emoción: 180,
    Alegría: 160,
    Frescura: 150 }

var ventas = {
    Aqua: 0,
    Emoción: 0,
    Alegría: 0,
    Frescura: 0 }

var Juana;
var Pedro;
var suma;
var J;
var P;

function obtenerVentas(ventas) {
    var bandera = true;
            do {
                let valor = prompt("Ingrese la cantidad de Aqua que vendio: ");
                if(!(isNaN(valor))){
                ventas.Aqua = valor;
                bandera = false;
                }
                else {
                alert("El dato ingresado no es correcto");
                bandera = true;
                }
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Emocion que vendio: ");
                if(!(isNaN(valor))){
                ventas.Emoción = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;
                }
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Alegria que vendio: ");
                if(!(isNaN(valor))){
                ventas.Alegría = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;}
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Frescura que vendio: ");
                if(!(isNaN(valor))){
                ventas.Frescura = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;}
            }while (bandera);     
        return ventas;                  
        }    
        
function asignarVentasJuana() {
        alert("Ingreso de ventas de Juana. Presione Enter para continuar.");
        Juana=obtenerVentas(ventas);
        imprimirVentasJuana();        
    }

function asignarVentasPedro() {
        alert("Ingreso de ventas de Pedro. Presione Enter para continuar.");
        Pedro=obtenerVentas(ventas);
        imprimirVentasPedro();       
    }
       
function imprimirVentasJuana() {
    console.log("Datos de Venta de Juana: ")
    console.table(Juana);
    console.log("Por un valor total de: "+sumarVentas(Juana)+" USD.");
}

function imprimirVentasPedro() {
    console.log("Datos de Venta de Pedro: ")
    console.table(Pedro);
    console.log("Por un valor total de: "+sumarVentas(Pedro)+" USD.");
}   

function sumarVentas(ventas) {
    suma=(ventas.Aqua)*(costoProductos.Aqua)+(ventas.Emoción*costoProductos.Emoción)+(ventas.Frescura*costoProductos.Frescura)+(ventas.Alegría*costoProductos.Alegría);
    return suma;
}

function vendedorMes() {
    J =parseFloat(sumarVentas(Juana));
    P =parseFloat(sumarVentas(Pedro));
        
    if (J>P){
        console.log("El vendedor del mes es: Juana");}
    if (J==P){
        console.log("Hay un empate de ventas");}
    if (J<P){
        console.log("El vendedor del mes es: Pedro")}
    }

asignarVentasJuana();
asignarVentasPedro();
vendedorMes();
console.log(J);
console.log(P);

  


