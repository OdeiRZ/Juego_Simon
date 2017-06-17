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
function comprobarColor(id) {
    if (nivel != 0) {
        if (id != colores[vector[conColor]]) {
            alert("Lo Siento has perdido el Juego");
            var nombre = prompt("Introduce tu Nombre para registrar tu Tiempo: ");
            (nombre.length != 0 && nombre.indexOf("=") == -1) ? comprobarRecord(nombre) : "";
            reiniciar(); 	//controlar pulsar cancelar
        } else {
            if (vector.length == conColor + 1) {
                document.getElementById('negro').innerHTML = "<button id='boton' onclick='comenzar()'>Subir Nivel</button>";
            } else {
                conColor++;
            }
        }
    }
}
function reiniciar() {
    nivel = 0;
    vector = new Array();
    document.getElementById('nivel').innerHTML = "";
    document.getElementById('negro').innerHTML = "<button id='boton' onclick='comenzar()'>START!</button>";
}
function comprobarRecord(nombre) {
    var topRecord = 5, matriz;
    if (document.cookie.length != 0) {
        matriz = leerCookie();
        var index = 1;
        matriz.sort(function(a, b) {
            var valueA = a[1];
            var valueB = b[1];
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            }
            return 0;
        });
        for (var i=0; i<matriz[0].length; i++) {
            alert(matriz[i][0] + " - " + matriz[i][1]);
        }
    }
	crearCookie(nombre + "=" + nivel, 1);
}