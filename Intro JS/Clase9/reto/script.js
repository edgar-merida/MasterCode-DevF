let arregloEstudiantes=[];

function registrarObjeto(objeto) {
    arregloEstudiantes.push(objeto);
    return arregloEstudiantes;
}

function obtenerDatos() {
    let objetoEstudiantes={
        Carnet: "",
        Nombre: "",
        Materia: "",
        Notas: {
            PrimerPeriodo: 0,
            SegundoPeriodo: 0,
            TercerPeriodo: 0,
            CuartoPerido: 0
        },
        Promedio: 0,
        promedioNotas: function(){
        let calculo=((this.Notas.PrimerPeriodo+this.Notas.SegundoPeriodo+this.Notas.TercerPeriodo+this.Notas.CuartoPerido)/4);
        return calculo;
        }        
    };
    objetoEstudiantes.Carnet=document.getElementById("Carnet").value;
    objetoEstudiantes.Nombre=document.getElementById("Nombre").value;
    objetoEstudiantes.Materia=document.getElementById("Materia").value;
    objetoEstudiantes.Notas.PrimerPeriodo=parseFloat(document.getElementById("PrimerPeriodo").value);
    objetoEstudiantes.Notas.SegundoPeriodo=parseFloat(document.getElementById("SegundoPeriodo").value);
    objetoEstudiantes.Notas.TercerPeriodo=parseFloat(document.getElementById("TercerPeriodo").value);
    objetoEstudiantes.Notas.CuartoPerido=parseFloat(document.getElementById("CuartoPeriodo").value);
    objetoEstudiantes.Promedio=parseFloat(objetoEstudiantes.promedioNotas());
    registrarObjeto(objetoEstudiantes);
    document.getElementById("Carnet").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Materia").value = "";
    document.getElementById("PrimerPeriodo").value = "";
    document.getElementById("SegundoPeriodo").value = "";
    document.getElementById("TercerPeriodo").value = "";
    document.getElementById("CuartoPeriodo").value = "";
    document.getElementById("registros").innerHTML = "";
};

function mostrarNotas() {
   var html = "";
    for (let index = 0; index < arregloEstudiantes.length; index++) {
        let elemento = arregloEstudiantes[index];
        html += "<tr>";
        html += "   <th scope='row'>" + (index + 1) + "</th>";
        html += "   <td>" + elemento.Carnet + "</td>";
        html += "   <td>" + elemento.Nombre + "</td>";
        html += "   <td>" + elemento.Materia + "</td>";
        html += "   <td>" + elemento.Promedio + "</td>";
        html += "</tr>";
    }    
    document.getElementById("registros").innerHTML =  html;
}


 



