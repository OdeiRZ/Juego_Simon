window.onload=function() {
    document.getElementById('boton').addEventListener("click", function(){comenzar();});
    document.getElementById('rojo').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('azul').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('verde').addEventListener("click", function(){comprobarColor(this.id);});
    document.getElementById('amarillo').addEventListener("click", function(){comprobarColor(this.id);});
};

var colores = ["rojo", "azul", "verde", "amarillo"], vector = new Array(), conColor, nivel = 0;
