class Vehiculos{
    constructor(color, marca, modelo, tipo_de_combustible, tipo_de_transmision, tipo_de_vehiculo){
        this.color = color,
        this.marca = marca,
        this.modelo = modelo,
        this.tipo_de_combustible = tipo_de_combustible,
        this.tipo_de_transmision = tipo_de_transmision,
        this.tipo_de_vehiculo = tipo_de_vehiculo
    }

    registrarVehiculo(){
         let html = "";
         html += "<tr>";
         html += "   <td>" + this.color + "</td>";
         html += "   <td>" + this.marca + "</td>";
         html += "   <td>" + this.modelo + "</td>";
         html += "   <td>" + this.tipo_de_combustible + "</td>";
         html += "   <td>" + this.tipo_de_transmision + "</td>";
         html += "   <td>" + this.tipo_de_vehiculo + "</td>";
         html += "   <td></td>";
         html += "</tr>";
         document.getElementById("registros").insertAdjacentHTML('beforeend', html);
        
         console.clear();
         console.table(arreglo);
     }

}