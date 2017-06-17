window.onload=function() {
    document.getElementById('boton').addEventListener("click", function(){comenzar();});
    document.getElementById('rojo').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('azul').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('verde').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('amarillo').addEventListener("click", function(){comprobarColor(this.id);});
};

var colores = ["rojo", "azul", "verde", "amarillo"], vector = new Array(), conColor, nivel = 0;

function comenzar() {
    nivel++;
    conColor = 0;
    document.getElementById('nivel').innerHTML = "Nivel " + nivel;
    vector.push(parseInt(Math.random() * colores.length));
    mostrarColores();
    document.getElementById('negro').innerHTML = "Turno del jugador";
}
function mostrarColores() {
    var coloresAux = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00"];
    var t = 1000;
	var retraso = 1.2;
    for (var i=0; i<vector.length; i++) {
        var tAux = t + (i * t);
        var color = coloresAux[vector[i]];
        var id = colores[vector[i]];
        cambiaColor(id, "background-color:" + color + ";", tAux);
        cambiaColor(id, "background-color:'';", tAux * retraso);
    }
}
function cambiaColor(id, estilo, t) {
    setTimeout(function(){
        document.getElementById(id).style = estilo;
    }, t);
}