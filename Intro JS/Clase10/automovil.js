class Automovil extends Vehiculos {
  
    registrarAutomovil(tipo_de_automovil, numero_de_asientos) {
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipo_de_combustible + "</td>";
        html += "   <td>" + this.tipo_de_transmision + "</td>";
        html += "   <td>" + this.tipo_de_vehiculo + "</td>";
        html += "   <td>" + tipo_de_automovil + "</td>";
        html += "   <td>" + numero_de_asientos + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
        
        
        console.clear();
        console.table(arreglo);
    }

}




