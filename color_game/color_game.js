// Paso 2 : Dar Color A Las Tarjetas
// 1. Creá un Arreglo llamado colors y escribí 6 colores en formato RGB.
// ⚠️ Importante: Escribí los colores respetando esta sintaxis (con los espacios) "rgb(240, 14, 128)".
const colors = [
    "rgb(240, 14, 128)",
    "rgb(14, 240, 128)",
    "rgb(240, 14, 14)",
    "rgb(14, 14, 240)",
    "rgb(240, 240, 14)",
    "rgb(14, 240, 240)"
];

// 2. Asignale a cada cuadrado un color:
// Seleccioná todos los cuadrados usando querySelectorAll().
// Recorrelos usando un for Loop. En cada vuelta del Loop, asignale un color del Arreglo colors.
const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}