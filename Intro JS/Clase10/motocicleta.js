class Motocicleta extends Vehiculos {

    registrarMotocicleta(tipo_de_motocicleta) {
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipo_de_combustible + "</td>";
        html += "   <td>" + this.tipo_de_transmision + "</td>";
        html += "   <td>" + this.tipo_de_vehiculo + "</td>";
        html += "   <td></td>";
        html += "   <td></td>";
        html += "   <td>" + tipo_de_motocicleta + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
        
        console.clear();
        console.table(arreglo);
    }


}